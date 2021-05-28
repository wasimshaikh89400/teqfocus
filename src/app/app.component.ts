import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {

  }

  dellAvailable() {
    return true
  }
  hpAvailable() {
    return setTimeout(() => {
      return false
    }, 3000)
  }
  ngOnInit(): void {
    let laptop = new Promise((resolve, reject) => {
      if (this.dellAvailable()) {
        setTimeout(() => {
          resolve('dell avalible')
        }, 3000)

      }
      else if (this.hpAvailable()) {
        resolve('hp availablle')
      }
      else reject('no available')
    })

    laptop.then(res => {
      console.log(res);
    }).catch(res => {
      console.log(res);

    })
  }
  muFunction() {
    async function getdata() {
      return 'data recieved'
    }
    console.log(getdata);

    getdata().then(res => {
      console.log(res);

    })
  }
}
