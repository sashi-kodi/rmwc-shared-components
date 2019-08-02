import React from 'react';
import {Card, CardPrimaryAction, CardActionButton, CardActionButtons, CardMedia, CardActions} from "@rmwc/card";
import {Typography} from "@rmwc/typography";
import "../scss/index.scss";
interface CardProps {
  outlined?: boolean,
    style?: Object,
    headerText: string,
    subtitleText: string,
    cardText: string,

};
const AppCard=(props:CardProps)=>{
    const {headerText, style={}, outlined, subtitleText, cardText} = props;
   return(
    <Card style={style}>
  <CardPrimaryAction>
    <CardMedia
      sixteenByNine
      style={{
        backgroundImage: 'url(images/backgrounds/mb-bg-fb-16.png)'
      }}
    />
    <div style={{ padding: '0 1rem 1rem 1rem' }}>
      <Typography use="headline6" tag="h2">
         {headerText}
      </Typography>
      <Typography
        use="subtitle2"
        tag="h3"
        theme="textSecondaryOnBackground"
        style={{ marginTop: '-1rem' }}
      >
        {subtitleText}
      </Typography>
      <Typography
        use="body1"
        tag="div"
        theme="textSecondaryOnBackground"
      >
       {cardText}
      </Typography>
    </div>
  </CardPrimaryAction>
  <CardActions>
    <CardActionButtons>
      <CardActionButton>Read</CardActionButton>
      <CardActionButton>Bookmark</CardActionButton>
    </CardActionButtons>
  </CardActions>
</Card>
   )
}
export default AppCard;