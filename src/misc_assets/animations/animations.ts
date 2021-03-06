import {
  animation,
  group,
  trigger,
  transition,
  style,
  animate,
  state,
  keyframes
} from "@angular/animations";

export const Animations = {
  /*Used in HomepageComponent for shift content on navbar slide*/
  shiftContents: trigger("shiftContents", [
    state("open", style({ marginLeft: "21%" })),
    state("closed,void", style({ marginLeft: "13%" })),
    transition("closed<=>open", animate("0.2s")),
    transition("void=>*", animate("0.2s"))
  ]),
  /*Used in LoginComponent and SignupComponent for the containers*/
  swoopIn: trigger("swoopIn", [
    transition("void=>*", [
      style({
        transform: "scaleX(0) scaleY(0) rotateX(180deg) rotateY(180deg)"
      }),
      animate("0.2s")
    ])
  ]),
  /*Used for the side nav in HeaderComponent*/
  sidenavOpenClose: trigger("sidenavOpenClose", [
    state(
      "open",
      style({
        opacity: 1,
        transform: "translateX(0%)"
      })
    ),
    state(
      "closed,void",
      style({
        opacity: 0,
        transform: "translateX(-50%)"
      })
    ),
    transition("closed<=>open", [animate("0.2s")]),
    transition("void=>open", animate("0.2s"))
  ]),
  /*Used for alert messages */
  fadeInOut: trigger("fadeInOut", [
    transition(":enter", [
      style({ opacity: 0 }),
      animate(500, style({ opacity: 1 }))
    ])
  ]),
  flyIn: trigger("flyFromBottom", [
    transition(":enter", [
      animate(
        300,
        keyframes([
          style({ transform: "translate(-50%,-100%)" }),
          style({ transform: "translate(-50%,-49%)" }),
          style({ transform: "translate(-50%,-50%)" }),
          style({ transform: "translate(-50%,-51%)" }),
          style({ transform: "translate(-50%,-50%)" })
        ])
      )
    ])
  ]),
  blink: trigger("blink", [
    transition(":enter", [
      animate(
        1000,
        keyframes([
          style({ opacity: 0 }),
          style({ opacity: 1 }),
          style({ opacity: 0 }),
          style({ opacity: 1 }),
          style({ opacity: 0 }),
          style({ opacity: 1 }),
          style({ opacity: 0 }),
          style({ opacity: 1 }),
          style({ opacity: 0 }),
          style({ opacity: 1 })
        ])
      )
    ])
  ])
};
