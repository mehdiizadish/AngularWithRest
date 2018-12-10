import { Component, OnInit,  Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


import { Personal } from '../data/formData.model';
import { FormDataService } from '../data/formData.service';
import { Product } from '../product/product.model';
@Component({
    selector: 'mt-wizard-personal'
    , templateUrl: './personal.component.html'
})

export class PersonalComponent implements OnInit {

    newProduct: Product = new Product();

    @Output()
    add: EventEmitter<Product> = new EventEmitter();


    title = 'Please tell us about yourself.';
    personal: Personal;
    bussinesses = ["Baker", "Plumber", "Hairdresser"];
    bussinesslo = ["Lease building", "Own building", "On the road", "Market stall", "I work from home"];

    form: any;

    constructor( private route: ActivatedRoute, private router: Router, private formDataService: FormDataService) {
    }

    ngOnInit() {
     //   this.personal = this.formDataService.getPersonal();
        console.log('Personal feature loaded!');
    }

    save(form: any): boolean {
        if (!form.valid) {
            return false;
        }

        this.formDataService.setPersonal(this.personal);
        return true;
    }

    goToNext(form: any) {
        /* if (this.save(form)) {
            // Navigate to the work page
            this.router.navigate(['/work']);
        } */
    // this.router.navigate(['/work']);
    }
    findProduct() {
        this.add.emit(this.newProduct);
        this.newProduct = new Product();
    }
}
