import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Animations } from "../../../misc_assets/animations/animations";
import { url } from "../../../url";
import { LoginpageService } from "../../service/loginpage/loginpage.service";
import { trigger, transition, style, animate } from "@angular/animations";
import { AuthService } from "src/app/auth.service";
import { CookieService } from "ngx-cookie-service";

@Component({
  selector: "app-loginpage",
  templateUrl: "./loginpage.component.html",
  styleUrls: ["./loginpage.component.css"],
  animations: [Animations.swoopIn, Animations.fadeInOut]
})
export class LoginpageComponent implements OnInit {
  constructor(
    private router: Router,
    private service: LoginpageService,
    private authservice: AuthService,
    private cookie: CookieService
  ) {}
  username: string;
  password: string;
  incorrectInputData: boolean = false;
  ripples: Boolean = true;

  emptyField: boolean = false;

  ngOnInit() {}
  routeToHomePage = () => {
    if (!this.username || !this.password) {
      this.emptyField = true;
    } else {
      this.service
        .getAccountPresent(this.username, this.password)
        .subscribe(data => {
          if (data.username !== -1) {
            if (data.role === "admin") {
              this.authservice.setAdminLoggedIn(true);
              this.setUserCookies(data);
              this.router.navigateByUrl("/admin");
            }
            if (data.role === "user") {
              this.authservice.setUserLoggedIn(true);
              this.setUserCookies(data);
              this.router.navigateByUrl("/home");
            }
          } else {
            this.incorrectInputData = true;
          }
        });
    }
  };
  setUserCookies(data) {
    this.cookie.set("username", data.username);
    this.cookie.set("role", data.role);
  }
  alterEmptyFieldState = () => {
    this.emptyField = false;
    this.incorrectInputData = false;
  };
}
