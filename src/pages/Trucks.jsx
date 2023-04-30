import BottomNav from '../partials/BottomNav';
import Header from '../partials/Header';
import { Card, CardContent, Typography } from '@material-ui/core';
import { GiTruck } from 'react-icons/gi';
import { useNavigate } from 'react-router';

export default function Trucks() {

  const navigate = useNavigate();

  const data = [
    {
      code: 'A',
      description: '',
    },
    {
      code: 'B',
      description: '',
    },
    {
      code: 'C',
      description: '',
    },
  ];
  
  return (
    <div style={{ paddingTop: 80 }}>
      <Header/>
      {data.map((card) => (
        <Card key={card.code} style={{ marginBottom: '10px' }} onClick={() => navigate('/truck:'+card.code)}>
          <CardContent style={{ display: 'flex', flexDirection: 'row'}}>
            <GiTruck size={30} style={{ marginRight: '10px' }} />
            <Typography variant="h5" component="h2">
              {card.code}
            </Typography>
            <Typography color="textSecondary">{card.description}</Typography>
          </CardContent>
        </Card>
      ))}
      <BottomNav/>
    </div>
  );
}