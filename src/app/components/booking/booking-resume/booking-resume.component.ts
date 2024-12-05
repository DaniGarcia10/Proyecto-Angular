import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import { BookingService, Booking} from '../../../services/booking.services';

@Component({
  selector: 'app-booking-resume',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './booking-resume.component.html',
  styleUrls: ['./booking-resume.component.css']
})
export class BookingsComponent implements OnInit {
  bookings: Booking[] = [];

  constructor(private bookingService: BookingService) {}

  ngOnInit() {
    this.bookings = this.bookingService.getBookingList();
  }

  deleteBooking(id: number) {
    this.bookingService.deleteBooking(id);
  }

}