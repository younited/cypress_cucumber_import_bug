import { Given, When, Then  } from "@badeball/cypress-cucumber-preprocessor";
import { helperMethod } from "./support/helpers";

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
