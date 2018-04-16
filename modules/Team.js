import Analytics from './Analytics';
import React from 'react';

class Team extends React.Component{
  constructor(){
    super();
  }
  componentDidMount() {
    Analytics.page('/Team');
  }
  render(){
    return (
      <div className="text-container">
        <h1>The Team</h1>
        
        <br/>
        <div className="partner">
          <div style={{width: "40%", paddingRight:"30px"}}><img src="/modules/assets/team/andy2.jpg"/></div>
          <div style={{width: "60%"}}>
            <h2>Andrew Sweeney</h2>
            <h5 className="orange">FOUNDER / EVENTS / SCOOP TOUR</h5>
            <p>In 2008, right after college, Andy embarked on a trip around the world, ending up in South-East Asia where he came across a small, family run school &mdash; an encounter that led him on the path to creating SCOOP. Andy has a love for running all types events, creating innovative ways of fundraising, and generally loves building an organisation that is open to all to get involved, and that tries out new ideas all the time.</p>
            <p><u><a className="hover-orange" href="mailto:andy@scoopfoundation.com">andy@scoopfoundation.com</a></u></p>
          </div>
        </div>
        <div className="partner">
          <div style={{width: "60%"}}>
            <h2>Calvin James</h2>
            <h5 className="purple">SYRIAS VIBES & SCOOP CO-FOUNDER</h5>
            <p>It was a visit by Andy’s brother Calvin to Cambodia in 2002 that prompted him to go several years later. A DJ, Special Needs Assistant and all round good guy, since leaving school aged 18 Calvin has never stopped travelling and has visited over 80 countries worldwide. He is currently writing down all of his travel stories (<u><a className="hover-purple" href="http://scoopfoundationblog.wordpress.com">check out our blog</a></u>) and spends time each year working as a Medical Assistant in Syria.</p>
          </div>
          <div style={{width: "40%", paddingLeft:"30px"}}><img src="/modules/assets/team/calvin.jpg"/></div>
        </div>
        <div className="partner">
          <div style={{width: "40%", paddingRight:"30px"}}><img src="/modules/assets/team/jodi.jpg"/></div>
          <div style={{width: "60%"}}>
            <h2>Jodi Rashbrook</h2>
            <h5 className="orange">INDIA & SCOOP AUSTRALIA CO-FOUNDER</h5>
            <p>Whilst she calls Perth home, she lives a semi nomadic lifestyle and enjoys volunteering overseas. Just before Jodi co-founded SCOOP Australia, she had returned from teaching English for 5 months in Ladakh, India. It wasn’t long before she was back in India, this time spending 6 months at our partner NGO supporting the Jeevan School. It’s being with the kids and seeing them learn, create and grow that drives Jodi’s passion.</p>
          </div>
        </div>
        <div className="partner">
          <div style={{width: "60%"}}>
            <h2>Lisa Rennie</h2>
            <h5 className="purple">SCOOP AUSTRALIA (FOUNDER)</h5>
            <p>After university Lisa moved to Cambodia to volunteer for SCAO and then intern for the UNDP. It was these experiences, and her South African childhood, that compelled Lisa to take action for change. But her final inspiration for bringing The SCOOP Foundation to Australia was the birth of her daughter, who Lisa hopes will grow and learn that the world, and its people, can be beautiful.</p>
          </div>
          <div style={{width: "40%", paddingLeft:"30px"}}><img src="/modules/assets/team/lisa.jpg"/></div>
        </div>

        <div className="partner">
          <div style={{width: "70%"}}>
            <h2>Claire Seringhaus</h2>
            <h5 className="purple">BLOG MANAGER</h5>
            <p>Claire is a professional freelance writer, editor and project manager, having worked with the Canadian Encyclopedia, ICOMOS, Bauhaus University, Youth Science Foundation Canada, MyWorldAbroad.com, and many others. She also works as an interdisciplinary artist, and has performed and exhibited in Canada, the US, Germany and Bosnia. Claire is currently based in Bogotá, Colombia.</p>
          </div>
          <div style={{width: "30%", paddingLeft:"30px"}}><img src="/modules/assets/team/claire.jpg"/></div>
        </div>

        <div className="partner">
          <div style={{width: "30%", paddingRight:"30px"}}><img src="/modules/assets/team/wendy.jpg"/></div>
          <div style={{width: "70%"}}>
            <h2>Wendy Cheung</h2>
            <h5 className="orange">SOFTWARE ENGINEER</h5>
            <p>Wendy is a Software Engineer and the creator of scoopfoundation.com website, she is also part of The United Nations Volunteers program (UNV). Currently based in San Francisco, she is a lover of life and believes by supporting one another we can make the world a better place. Check out more of her work <u><a className="hover-purple" href="//wendycheung.me">here</a></u>.</p>
          </div>
        </div>
      </div>
    );
  }
};

export default Team;