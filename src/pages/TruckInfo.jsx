import { useParams } from 'react-router';
import BottomNav from '../partials/BottomNav';
import Header from '../partials/Header';
import Map from '../partials/TruckRoute';

export default function TruckInfo() {
    const {truckId} = useParams();

    console.log(truckId)

    const routes = {
        A: [  
            [-66.166988, -17.382428],
            [-66.167904, -17.385621],
            [-66.168538, -17.389694],
            [-66.168567, -17.392334],
            [-66.167882, -17.394888],
            [-66.166908, -17.396955],
            [-66.165206, -17.398323],
            [-66.162599, -17.398966],
            [-66.159491, -17.398868],
            [-66.156778, -17.39801],
            [-66.155471, -17.396572],
            [-66.154899, -17.394372],
            [-66.15541, -17.391783],
            [-66.156315, -17.388777],
            [-66.157529, -17.386812],
            [-66.159161, -17.385152],
            [-66.161105, -17.383943],
            [-66.163181, -17.383352],
            [-66.165257, -17.383445],
            [-66.166988, -17.382428]
        ],
        D: [  
            [-66.166988, -17.382428],
            [-66.167904, -17.385621],
            [-66.168538, -17.389694],
            [-66.168567, -17.392334],
            [-66.167882, -17.394888],
        ],
        C: [  
            [-66.155471, -17.396572],
            [-66.154899, -17.394372],
            [-66.15541, -17.391783],
            [-66.156315, -17.388777],
            [-66.157529, -17.386812],
            [-66.159161, -17.385152],
            [-66.161105, -17.383943],
            [-66.163181, -17.383352],
            [-66.165257, -17.383445],
            [-66.166988, -17.382428]
        ]
      }
    
      const geojson = {
        type: 'FeatureCollection',
        features: [
          {type: 'Feature', geometry: {type: 'LineString', coordinates: routes[truckId.substring(1)]}}
        ]
      };

  return (
    <div className='w-full'>
      <Header />
      <Map geojson={geojson} />
      <BottomNav/>
    </div>
  );
}
