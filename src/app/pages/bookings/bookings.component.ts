import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BookingService, Booking} from '../../services/booking.services';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { BookingsComponent as BookingResumeComponent } from "../../components/booking/booking-resume/booking-resume.component";

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [
    CommonModule, HeaderComponent, FooterComponent, BookingResumeComponent
],
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {
  bookings: Booking[] = [];

  constructor(private bookingService: BookingService) {}

  ngOnInit() {
    this.bookings = this.bookingService.getBookingList();
  }
}