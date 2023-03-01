import React from 'react'
import ProfilePic from '../../Images/ProfilePic.jpg'

function Homepage() {
  const headShot = ProfilePic
  const happy =
    'Hello, my name is Hunter Monroe, I am a former hospitality professional turned Front End Developer.In my previous career I learned problem - solving in a fast - paced environment, I learned that not all problems are the same and you can’t always use what worked before.I had to communicate and collaborate with people from all over the world.I had to manage my time extremely well to ensure deadlines, budgets and coordination for events were met I ensured all services were performed up to standard.As my career progressed, I noticed a huge increase in the importance of technology and the roles it plays in our daily lives.I decided to take a risk and jump headfirst into the world of tech.My problem - solving skills, persistence and enthusiasm for tech make me a great candidate for your company.Thank you for taking the time to read about me, please feel free to reach out to me.';
  return (
    <section>
      <div>
        <img src={headShot} alt="headShot" width={200}/> 
      </div>
      <div className='about-section'>
        <h3>About</h3>
        <p>
        {happy}
        </p>
      </div>
    </section>
  );
}

export default Homepage
