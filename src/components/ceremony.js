import React from 'react';
import Panel from './panel';
import headingCeremonyUrl from '../images/Header-Ceremony.png';
import kasiYatraUrl from '../images/1-Kasi-Yatra.jpg';
import garlandUrl from '../images/2-Garland.jpg';
import oonjalUrl from '../images/3-Oonjal.jpg';
import mandapUrl from '../images/4-Mandap.jpg';
import kanyadanamUrl from '../images/4.1-Kanyadanam.jpg';
import thaliUrl from '../images/4.2-Thali.jpg';
import giftsUrl from '../images/4.3-Gifts.jpg';
import intermissionUrl from '../images/4.4-Intermission.jpg';
import sevenStepsUrl from '../images/4.5-Seven-Steps.jpg';
import feedFireUrl from '../images/4.6-Feed-Fire.jpg';
import mettiUrl from '../images/4.7-Metti.png';
import puffedRiceUrl from '../images/4.8-Puffed-Rice.jpg';
import finalBlessingsUrl from '../images/4.9-Final-Blessings.jpg';
import groupPhotosUrl from '../images/5-Group-Photos.jpg';

export default () => {
  return <Panel className="content">
    <img src={headingCeremonyUrl} width="400" height="145" alt=""/>
    <p>All times are approximate, but this is the basic rundown of the day.</p>
    <p>The ceremony starts around 9:30 and ends approximately at 11:30am.</p>

    <h2>Kasi Yatra (Spiritual Pursuit) - 10 minutes</h2>
    <p>
      Ryan will go on a mock pilgrimage to pursue further religious studies, and renounce his worldly pursuits. Ami's
      father then intervenes and advocates that married life is the route he should now follow, rather than an ascetic
      / spiritual life. Ryan accepts the proposition and then returns to get married.
    </p>
    <img src={kasiYatraUrl} width="960" height="640" alt=""/>

    <h2>Maalai Maatral (Garland Exchange) - 10 minutes</h2>
    <p>
      The bride and groom are lifted to the shoulders of their respective maternal uncles. This is an expression of
      continuing sibling support to their mothers. The bride and groom attempt to garland each other three times, with
      both sides trying to dodge each attempt. In Hindu scripture, the exchange of garlands symbolizes their
      unification, as one soul in two bodies.
    </p>
    <img src={garlandUrl} width="960" height="640" alt=""/>

    <h2>Oonjal (The Swing) - 15 minutes</h2>
    <p>
      The couple are made to sit on a  swing which is rocked gently. The swing's oscillating motion is a message to
      the couple that they must stay strong together during the challenges and joys of life. Relatives and friends
      sing auspicious songs, blessing the couple. They are offered milk and bananas and the ladies from both the
      families throw coloured rice balls in four directions to ward off evil spirits. This ritual also signifies
      support of that family and friends during the couple's married life.
    </p>
    <img src={oonjalUrl} width="960" height="640" alt=""/>

    <h2>The Mandap - 1.5 Hours</h2>
    <p>
      Ryan and Ami now walk down to the ceremony marquee and sit within the Mandap (a four pillar structure).
      <br/>
      Many smaller ceremonies now take part within the Mandap &amp; are described below. They may appear in a
      different order, depending on the proceedings of the day.
    </p>
    <img src={mandapUrl} width="960" height="640" alt=""/>

    <h3>Kanyadanam</h3>
    <p>
      Ami sits on her father's lap. Auspicious items like a coconut, betel leaves, and nuts are placed in Ami's hands.
      A grass ring is placed on Ami's head, and over it is placed a
      <a href="https://en.wikipedia.org/wiki/Yoke" target="blank">yoke</a>. Ami's wedding necklace is placed on the
      aperture of the yoke, and water is poured though the aperture.
    </p>
    <img src={kanyadanamUrl} width="333" height="500" alt=""/>

    <h3>Mangalyadharanam</h3>
    <p>
      Ryan puts a gold wedding necklace around Ami's neck. As he does so, music is played loud and fast so as to
      muffle any inauspicious sounds. This is called &ldquo;Getti Melam.&rdquo; At the same time as the wedding
      necklace, a turmeric thread is also put around Ami's neck. 3 knots are tied to this thread. The first knot is
      tied by the Ryan. The other two knots are tied by a female relative of the groom to make the bride a part of
      their family.
    </p>
    <img src={thaliUrl} width="500" height="333" alt=""/>

    <h3>Pala Dhanam</h3>
    <p>
      Gifts are exchanged between the families of the bride and groom. A new saree is given to Ami by Ryan's parents
      as a gift.
    </p>
    <img src={giftsUrl} width="500" height="333" alt=""/>

    <h3>Intermission - 30 minutes</h3>
    <p>
      Ami changes into her new saree. Ami's cousin Bharat will play the violin during this time. <br/>
      Guests can stretch their legs / eat / drink / chat while they wait for Ami to return in her new saree.
    </p>
    <img src={intermissionUrl} width="500" height="333" alt=""/>

    <h3>Sapthapadi</h3>
    <p>
      Ami and Ryan take seven steps around the sacred fire. Ryan chants to bless Ami with food, strength, piety,
      progeny, wealth, comfort and health.
    </p>
    <img src={sevenStepsUrl} width="500" height="333" alt=""/>

    <h3>Pradhana Homam</h3>
    <p>
      Ami and Ryan feed the fire with ghee and twigs of nine types of holy trees as sacrificial fuel.
    </p>
    <img src={feedFireUrl} width="500" height="333" alt=""/>

    <h3>Treading on the Grindstone</h3>
    <p>
      Holding Ami's left toe,  Ryan helps her to tread on a grindstone kept on the right side of a fire.
      <br/>
      This ritual is symbolic of the solid rock foundation for the union.
      <br/>
      Ryan gently places the bride's foot on a grinding stone near the fire and slips silver rings or
      &ldquo;Mettis&rdquo; on her toes.
    </p>
    <img src={mettiUrl} width="500" height="333" alt=""/>

    <h3>Laaja Homam</h3>
    <p>
      Lava helps Ami feed puffed rice into the fire as an expression of sibling support. Through this food offering,
      Ami seeks a long life for Ryan and for their families.
    </p>
    <img src={puffedRiceUrl} width="333" height="500" alt=""/>

    <h3>Final Blessings</h3>
    <p>Final blessings from the Priest and the family.</p>
    <img src={finalBlessingsUrl} width="333" height="500" alt=""/>

    <h2>Photographs</h2>
    <p>Please stand by to take photos with Ryan and Ami before proceeding into the reception marquee for lunch!</p>
    <img src={groupPhotosUrl} width="960" height="640" alt=""/>
  </Panel>;
}
