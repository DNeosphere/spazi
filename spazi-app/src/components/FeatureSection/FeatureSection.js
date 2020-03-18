import React from "react";

import "./FeatureSection.css"

function FeatureSection() {
  return (
    <div className="feature-section">
      <div className="row feature-section be-spazi-section">
        <div className="primary col f-col be-spazi-img">

        </div>

        <div className="secondary col f-col">
          <h2>Find a Spazi or be a Spazi</h2>
          <p>
            <strong>If you love animals </strong> and you have time and to take
            care of them, then you can <strong>be a Spazi!</strong> we will be
            happy to hear from you.
            <br />
            We also love animals, that is why we have an application process to
            ensure the safety of them.
          </p>
          <p>
            <strong>Find a Spazi! </strong> We understand the life rythm of
            these times, when you don't have the time or you have to travel and
            can't take care of your loved ones, we will be there With the
            perfect Spazi for you and your pet.
          </p>
        </div>
      </div>

      <div className="row">
        <div className="primary col f-col">
          <h2>Look for the perfect match!</h2>
          <p>Wether you are looking for a Spazi or you want to be a Spazi</p>
          <p>
            We want you to be sure that you will find the best fit for your loved one.
            SpaziApp will provide an ID authentication and we will be sure that the Spazi
            you want to contact, hast the appropiate conditions to make your pet/plant happy
          </p>
          <p>
            If you are passionate about animals and want to take care of them so you decide to be a Spazi,
            we will take care of you as well, SpaziApp will provide the connection to ensure a safe transaction
          </p>
        </div>

        <div className="secondary col find-spazi-img f-col">
          
          
        </div>
      </div>

      <div className="row feature-section be-spazi-section">
        <div className="primary col f-col rate-spazi-img">

        </div>

        <div className="secondary col f-col">
          <h2>Rate the service</h2>
          <p>
            Every time you match a Spazi, you will have the chance to leave him/her
            a feedback!, if you and your pet liked the service, you can make the Spazi happy
            with a 5 stars rate
          </p>
          <p>
            As a Spazi, you are the soul of the app, so you will have a profile with your rates,
            since we care about animals we know you will collect a lot of stars to show!
          </p>
          
        </div>
      </div>
    </div>
  );
}

export default FeatureSection;
