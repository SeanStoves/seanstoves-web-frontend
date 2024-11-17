/*
Footer component using flowbite-react
Footer links: Contact, Site Map, Social Media
Print the current year using JavaScript and append the text "© Sean Stoves" to the footer
*/
"use client";
import React from "react";
import { Footer } from "flowbite-react";
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";

export default function FooterComponent() {
    const currentYear = new Date().getFullYear();
    return (
    <Footer container>
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
            <Footer.Brand
                href="#"
                src="https://flowbite.com/docs/images/logo.svg"
                alt="Flowbite Logo"
                name="Sean Stoves"
            />
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="Contact" />
              <Footer.LinkGroup col>
                {
                    ["Email", "Phone", "discord"].map((item, index) => (
                        <Footer.Link key={index} href="#">
                        {item}
                        </Footer.Link>
                    ))
                }
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Site Map" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Link 1</Footer.Link>
                <Footer.Link href="#">Link 2</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
          <div>
            
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href="#" by="Sean Stoves™" year={currentYear} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="#" icon={BsFacebook} />
            <Footer.Icon href="#" icon={BsInstagram} />
            <Footer.Icon href="#" icon={BsTwitter} />
            <Footer.Icon href="#" icon={BsGithub} />
            <Footer.Icon href="#" icon={BsDribbble} />
          </div>
        </div>
      </div>
    </Footer>
    );
}
