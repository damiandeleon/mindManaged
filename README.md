# Mind Managed

<h1 id="#contents">Table of Contents:</h1>
<ul>
  <li><a href="#description">Description</a></li>
  <li><a href="#links">Links</a></li>
  <li><a href="#tech">Tech Stack</a></li>
  <li><a href="#tasks">Tasks</a></li>
  <li><a href="#wireframe">Wireframe</a></li>
  <li><a href="#preview">App Preview</a></li>
  <li><a href="#contributors">Contributors</a></li>
</ul>

<h1 id="description">Description</h1>
<p>Mind Managed tracks a user's daily mood, prescription use, and journal entry so that the user can keep a detailed record to show their doctor.</p>

<h1 id="links">Links</h1>
<a href="https://obscure-beyond-60909.herokuapp.com/" target="_blank">Deployed Link</a>

<h1 id="tech">Tech Stack</h1>
<ul>
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
    <li>MongoDB</li>
    <li>Express</li>
    <li>React</li>
    <li>Node.js</li>
    <li>openFDA API - https://open.fda.gov/apis/drug/</li>
    <li>Recharts - https://uber.github.io/react-vis/</li>
    <li>Auth0 - https://auth0.com/docs/</li>
</ul>

<h1 id="tasks">Task Breakdown</h1>

- Caroline
  - openFDA API
  - Medication/Intake page
  - Concept/wireframe
- Damian
  - Journal/mood entry
  - Charts
- Kyle
  - Home page
  - User authentification
  - UI design

<h1 id="wireframe">Wireframe</h1>
<h2>Home Page</h2>

![image](https://user-images.githubusercontent.com/72889560/119748290-3296a680-be5a-11eb-9f07-e603e3a44809.png)

<h2>Journal Page</h2>

![image](https://user-images.githubusercontent.com/72889560/119748311-43471c80-be5a-11eb-8092-2fc3460bc064.png)

<h2>Medication Page</h2>

![image](https://user-images.githubusercontent.com/72889560/119748343-5b1ea080-be5a-11eb-8549-b9a5cb099167.png)

<h1 id="preview">App Preview</h1>

## Landing Page
We decided to create a landing page that highlights what the app offers. It also allows non-authenticated users to view the site without being redirected to a login route.
Clicking the "Login" or "Get Started" button will redirect users to Auth0's authentification API where they can create a new account through Auth0, sign in with auth0 credentials, or sign in with a Google account.

![Home](https://user-images.githubusercontent.com/72889560/122265212-1658b900-ce9e-11eb-9e76-ec72455ef24f.png)

If the user is not logged in and tries to access authorized routes, a component will display asking the users to log in.

![access](https://user-images.githubusercontent.com/72889560/122265220-18bb1300-ce9e-11eb-8a57-12aa0148a612.png)

## Charts
Chart data is tied to a specific user through a user ID. Data is taken from journal entries to display the user's mood levels over time.

![Chart](https://user-images.githubusercontent.com/72889560/122265221-18bb1300-ce9e-11eb-82d6-4eb4cb6be6a6.png)

## Journal
Users can pick a mood level based on how they're feeling as well as save any details or notes that may explain why they chose that mood level.
![journal](https://user-images.githubusercontent.com/72889560/122265226-19ec4000-ce9e-11eb-9086-2669e1a0a9ce.png)

Journal entries are saved in a list and are organized by date. An entry can be clicked to display more details.

![details](https://user-images.githubusercontent.com/72889560/122265231-1b1d6d00-ce9e-11eb-8fec-6d5f8ea333df.png)

## Medication
This page allows users to search for their medication and add it to their prescription list. Drug interactions can be easily accessed by clicking on the provided link.

![medication](https://user-images.githubusercontent.com/72889560/122265233-1bb60380-ce9e-11eb-88ba-1590770646ba.png)

Users are asked if they've taken their medication and missed days are stored in the intake tracker which can be reached by clicking the "Intake Tracker" button.

![intake-tracker](https://user-images.githubusercontent.com/72889560/122265238-1ce73080-ce9e-11eb-8317-cd93c2d69aa7.png)

<h1 id="contributors">Contributors</h1>

- [Caroline](https://github.com/caroline-e-miller)
- [Damian](https://github.com/damiandeleon)
- [Kyle](https://github.com/ktkyletran)
