import React from 'react';
import Panel from './panel';
import headingUrl from '../images/Heading-Outfit-Inspo.png';
import sareeUrl from '../images/Saree.png';
import lehengaUrl from '../images/Lehenga.png';
import kurtiSalwarUrl from '../images/Kurti-Salwar.png';
import kurtaUrl from '../images/Kurta.png';

export default () => {
  return <Panel className="content">
    <img src={headingUrl} width="400" height="200" alt=""/>
    <p>
      If you would like to indulge us by dressing up Bollywood style, we recommend shopping at George Street in
      Liverpool. There are some awesome Indian stores there with many options.
    </p>
    <p>Alternatively, try finding a friend who has some Indian clothes you can borrow.</p>
    <p>Here are some options for the girls. </p>
    <table width="400" cellPadding="2">
      <tbody>
      <tr>
        <td><img src={sareeUrl} width="300" height="450" alt=""/></td>
        <td><img src={lehengaUrl} width="300" height="450" alt=""/></td>
        <td><img src={kurtiSalwarUrl} width="300" height="450" alt=""/></td>
      </tr>
      <tr>
        <td>A &quot;saree&quot;  is a blouse and a long sheet of fabric that wraps around the body. </td>
        <td>
          A &quot;lehenga&quot;  is an easy-to-wear version of a saree. It consists of a blouse with long skirt and
          optional scarf.
        </td>
        <td>
          A more conservative option is the &quot;Salwar,&quot; or &quot;Kurti&quot; which is a  dress over
          lightweight pants
        </td>
      </tr>
      </tbody>
    </table>
    <br />
    <br />
    <p>Gentlemen can wear a &quot;kurta&quot; which is a knee-length shirt with pants.</p>
    <p><img src={kurtaUrl} width="300" height="450" alt=""/></p>
    <p>It's best to wear comfortable shoes, since the ceremony and reception will both be on grass.</p>
    <p>
      Indian weddings are all about colour. If you don't want to dress up in Indian clothes, putting on a bright and
      colourful outfit would really add to the atmosphere.
    </p>
  </Panel>;
}
