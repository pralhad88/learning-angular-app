import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Rental } from "./rental.model";

@Injectable()
export class RentalService {
    private rentals: Rental[] = [
        {
          id: "1",
          title: "Central Apartment",
          city: "New York",
          street: "Times Square",
          category: "apartment",
          image: "http://via.placeholder.com/350x250",
          bedroom: 3,
          description: "very nice",
          dailyRate: 31,
          shared: false,
          createdAt: "24/12/2020"
        },
        {
          id: "2",
          title: "East Apartment",
          city: "Chalisgaon",
          street: "Patna devi Road",
          category: "apartment",
          image: "http://via.placeholder.com/350x250",
          bedroom: 3,
          description: "very nice",
          dailyRate: 80,
          shared: false,
          createdAt: "24/06/2020"
        },
        {
          id: "3",
          title: "North Apartment",
          city: "Jalgaon",
          street: "Bhadgaon Road",
          category: "apartment",
          image: "http://via.placeholder.com/350x250",
          bedroom: 3,
          description: "Good rooms",
          dailyRate: 60,
          shared: true,
          createdAt: "24/12/2020"
        },
        {
          id: "4",
          title: "South Apartment",
          city: "Shivapur",
          street: "Pimperkhed Road",
          category: "apartment",
          image: "http://via.placeholder.com/350x250",
          bedroom: 3,
          description: "Good service",
          dailyRate: 50,
          shared: false,
          createdAt: "21/12/2020"
        }
      ]

    public getRentalById(rentalId: string) : Observable<Rental> {
      return new Observable<Rental>((observer) => {

        setTimeout(() => {
          const foundRental = this.rentals.find((rental) => {
            return rental.id == rentalId
          });

          observer.next(foundRental)
        }, 500)
      });
    }

    public getRental() : Observable<Rental[]> {
        return new Observable<Rental[]>((observer) => {
            setTimeout(() => {
                observer.next(this.rentals);
            }, 1000)
        })
    }
}