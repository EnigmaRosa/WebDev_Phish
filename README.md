# Phishing Platform for Security Awareness Education
## Final project for Rowan University CS10310 - Introduction to Web Development, Summer 2020

## This project is *solely* for educational purposes.

#### Project Overview
This project creates a phishing platform for sending phishing emails using a series of templates leading to phishing landing pages.
This project does not collect input credentials; nonetheless, do not input real credentials.

As of August 2020, the functioning project can be accessed [here](http://elvis.rowan.edu/~prutchis2/phishing_final/). 

There are four primary components:
1. Phishing landing pages
2. Page alerting user of phishing attack
3. Phishing email templates
4. Emailing capability

Because this project was within the context of a web development class, "About" and "Liability" pages were also included.

Four popular platforms were mimicked for the email templates and landing pages:
1. Facebook
2. Twitter
3. Google
4. PayPal

#### Phishing Landing Pages
Each platform's landing page is designed to look like the platform's legitimate log-in page, with the exception of a notice at the bottom indicating that it is not a legitimate logon page. 

In working to match the design of the original page, two special considerations were made:
1. The Twitter username and password fields become blue upon focus, and the login button is only enabled once both fields are filled.
2. Upon submission, the passwords are verified according to the individual password requirements for each platform.

##### Password Verification
The goal of the password verification functionality is to check if the password being input by the user is a fake password. That is, is the password submitted actually a valid password for the spoofed platform?

Password requirements were ascertained for each platform and, if the submitted password does not meet them, the user is alerted. Additionally, the platform checks that an email address has been input.

Upon successful credential submission, the user is served a phishing alert page.

#### Phishing Alert Page
This page informs the user that they have falled victim to a credential phishing attack.

#### Email Templates
An email template was prepared for each of the four platforms, urging the recipient to log into their account.
A user is able to select one of the four templates, specify a recipient, preview the message, and send the phishing email.

##### Phishing Selection Page
The user selects the template from a dropdown menu, which is dynamically populated according to the contents of the "Emails" subdirectory. By having this menu dynamically generated, templates can be added and removed without needing to edit the selection menu.

The recipient email address specified by the user is validated by a script confirming the use and appropriate location of "@" and ".", just as in the email verification for all the login pages.

#### Emailing Functionality
Once the user selects the template, an iframe is used to display a preview to the user, at which point they may choose to "Cancel" or "Send".
As detailed previously, the "Emails" subdirectory is used to populate the selection menu. This folder contains two files for each template: an HTML file for the contents of the email and a meta file for the subject line and spoofed sender details. Once a selection is made, a php script is used to set the appropriate headers and send the email.



