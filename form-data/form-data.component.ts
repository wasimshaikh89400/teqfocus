import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2'
import { UserData } from '../../Model/userData.model'

@Component({
  selector: 'app-form-data',
  templateUrl: './form-data.component.html',
  styleUrls: ['./form-data.component.css']
})
export class FormDataComponent implements OnInit {

  constructor() { }
  data = 'admin'
  userDataForm: any
  firstName = ''
  surname = ''
  dateOfBirth = ''
  email = ''
  gender = ''
  mobile_no = ''
  city = ''
  country = ''

  userData: any = [{
    firstName: 'vijay',
    surname: 'sharma',
    dateOfBirth: '1990-03-24',
    email: 'vijaya@gamil.com',
    gender: 'male',
    mobile_no: 9111234343,
    city: 'Ahmednagar',
    country: 'india'

  },
  {
    firstName: 'vishal',
    surname: 'nangare',
    dateOfBirth: '1990-06-24',
    email: 'vishal@gamil.com',
    gender: 'male',
    mobile_no: 9111243587,
    city: 'Ahmednagar',
    country: 'india'

  },
  {
    firstName: 'samad',
    surname: 'shaikh',
    dateOfBirth: '1996-01-14',
    email: 'samad.shaikh@gamil.com',
    gender: 'male',
    mobile_no: 9114332567,
    city: 'Sonai',
    country: 'india'

  }]
  regXname = /^[a-z A-Z]{1,15}$/
  regXemail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
  dateOfBirthRegX = /^\d{4}\-(0?[1-9]|1[012]){2}\-(0?[1-9]|[12][0-9]|3[01]){2}$/
  regXmobile = /^[0-9]{10}/
  i: any

  ngOnInit(): void {

    this.userDataForm = new FormGroup({
      firstName: new FormControl('', [Validators.required, Validators.pattern(this.regXname)]),
      surname: new FormControl('', [Validators.pattern(this.regXname)]),
      dateOfBirth: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.pattern(this.regXemail)]),
      gender: new FormControl('', [Validators.required]),
      mobile_no: new FormControl('', [Validators.required, Validators.pattern(this.regXmobile)]),
      city: new FormControl('', [Validators.required, Validators.pattern(this.regXname)]),
      country: new FormControl('', [Validators.required, Validators.pattern(this.regXname)])
    })
  }
  submitData() {
    if (this.userDataForm.invalid) {
      Swal.fire({
        title: 'Invalid Data',
        text: 'Data enter by you is invalid please enter valid data',
        icon: 'warning',
        confirmButtonText: 'OK',

      })
      return;
    }
    else {
      const studentData = {
        firstName: this.userDataForm.value.firstName,
        surname: this.userDataForm.value.surname,
        dateOfBirth: this.userDataForm.value.dateOfBirth,
        gender: this.userDataForm.value.gender,
        mobile_no: this.userDataForm.value.mobile_no,
        email: this.userDataForm.value.email,
        city: this.userDataForm.value.city,
        country: this.userDataForm.value.country,
      }
      console.log(studentData);
      this.userData.push(studentData)
      this.userDataForm.reset()
      this.data = ''
      Swal.fire({
        title: 'Confirm...',
        text: 'Congrats! User successfully addded in database',
        icon: 'success',
        confirmButtonText: 'OK',

      })
    }
  }
  displayForm() {
    this.data = 'form'
  }
  displayTable() {
    this.data = 'table'
  }
  deleteUser(i: number) {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this user details!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Your user detail has beed deleted!.',
          'success',
          this.userData.splice(i, 1)
        )
        // For more information about handling dismissals please visit
        // https://sweetalert2.github.io/#handling-dismissals
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Your user detail is safe :)',
          'error'
        )
      }
    })

  }
  editUser(i: number) {
    this.data = 'inputData'
    this.i = i
    this.firstName = this.userData[i].firstName
    this.surname = this.userData[i].surname
    this.dateOfBirth = this.userData[i].dateOfBirth
    this.email = this.userData[i].email
    this.gender = this.userData[i].gender
    this.mobile_no = this.userData[i].mobile_no
    this.city = this.userData[i].city
    this.country = this.userData[i].country
  }
  updateUser() {
    const data = {
      firstName: this.firstName,
      surname: this.surname,
      dateOfBirth: this.dateOfBirth,
      email: this.email,
      gender: this.gender,
      mobile_no: this.mobile_no,
      city: this.city,
      country: this.country
    }
    this.userData.splice(this.i, 1, data)
    this.firstName = ''
    this.surname = ''
    this.dateOfBirth = ''
    this.email = ''
    this.gender = ''
    this.mobile_no = ' '
    this.city = ''
    this.country = ''
    this.data = 'table'
    Swal.fire({
      title: 'Confirm...',
      text: 'Congrats! User successfully updated in database',
      icon: 'success',
      confirmButtonText: 'OK',

    })
  }
  get firstNameRx() {
    return this.userDataForm.get('firstName')
  }
  get surnameRx() {
    return this.userDataForm.get('surname')
  }
  get dateOfBirthRx() {
    return this.userDataForm.get('dateOfBirth')
  }
  get emailRx() {
    return this.userDataForm.get('email')
  }
  get genderRx() {
    return this.userDataForm.get('gender')
  }
  get mobileRx() {
    return this.userDataForm.get('mobile_no')
  }

  get cityRx() {
    return this.userDataForm.get('city')
  }
  get countryRx() {
    return this.userDataForm.get('country')
  }
}
