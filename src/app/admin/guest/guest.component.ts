import { Component, OnInit } from '@angular/core';
import { GuestService } from '../services/guest.service';
import { Guest, GetGuest } from 'src/app/models/guest.model';
import { FormControl } from '@angular/forms';
import { switchMap } from 'rxjs/operators';

declare var $: any;

@Component({
  selector: 'app-guest',
  templateUrl: './guest.component.html',
  styleUrls: ['./guest.component.scss']
})
export class GuestComponent implements OnInit {

  constructor(private guestService: GuestService) { }

  guests: Array<Guest>;
  totalGuest: number;
  confirmGuest: number;
  noConfirmGuest: number
  guestEdit = null;
  messageConfirm: string;
  guestDelete: Guest;

  ngOnInit(): void {
    this.guestService.getGuest().subscribe((res: GetGuest)=> {
      this.guests = res.response;
      this.totalGuest = this.getTotalGuest();
      this.confirmGuest = this.getConfirmed(true);
      this.noConfirmGuest = this.getConfirmed(false);
    });
  }

  //confirm boolean, true getconfirm, false getnotconfirm
  getConfirmed (confirm) {
    return this.guests.filter((guest)=> {
      return confirm ? guest.confirmed : !guest.confirmed;
    })
    .reduce((ac, guest: Guest) => {
        return ac + guest.cant;  
    },0)

  }

  getTotalGuest() {
    return this.guests.reduce((ac, guest: Guest) => {
      return ac + guest.cant;  
    },0)
  }

  add() {
    this.guestEdit =  null;
  }

  edit(i) {
    this.guestEdit =  this.guests[i];
  }

  delete(i) {
    this.guestDelete =  this.guests[i];
    this.messageConfirm = "Esta seguro de que quiere eliminar al invitado " + this.guestDelete.description + " ?";
  }

  confirmationModal(res) {
    if (res) {
      this.guestService.deleteGuest(this.guestDelete._id).pipe(
        switchMap(()=>{
          $('#confirmModal').modal('hide')
          return this.guestService.getGuest();
        })
      ).subscribe((res: GetGuest) => {
        this.guests = res.response;
        this.totalGuest = this.getTotalGuest();
        this.confirmGuest = this.getConfirmed(true);
        this.noConfirmGuest = this.getConfirmed(false);
      });

    }
  }

  submitGuest(form: FormControl) {
 
    if (this.guestEdit) {
      this.guestService.editGuest(this.guestEdit._id, form.value).pipe(
        switchMap(() => {
          $('#addEditModal').modal('hide')
          return this.guestService.getGuest();
        })
      ).subscribe((res: GetGuest) => {
        this.guests = res.response;
        this.totalGuest = this.getTotalGuest();
        this.confirmGuest = this.getConfirmed(true);
        this.noConfirmGuest = this.getConfirmed(false);
      });
    } else {
      
      this.guestService.createGuest(form.value).pipe(
        switchMap(() => {
          $('#addEditModal').modal('hide')
          return this.guestService.getGuest();
        })
      ).subscribe((res: GetGuest) => {
        this.guests = res.response;
        this.totalGuest = this.getTotalGuest();
        this.confirmGuest = this.getConfirmed(true);
        this.noConfirmGuest = this.getConfirmed(false);
      });
    }
  }



}
