import { Given, When, Then  } from "@badeball/cypress-cucumber-preprocessor";
// The below import line is broken on purpose.
import { helperMethod } from "../support/helpers";
// The below, commented, import is the correct alternative to the broken above.
// import { helperMethod } from "./support/helpers";

Given("A thing is", () => {
  cy.visit('https://google.com');
});

When("I do a thing", () => {
  helperMethod();
  cy.wait(100);
});

Then("A thing has happend", () => {
  cy.wrap("hello").should("equal", "hello");
});
