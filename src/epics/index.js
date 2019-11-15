import { ofType } from 'redux-observable';
import { delay, mapTo, mergeMap } from 'rxjs/operators';
import axios from 'axios';
import { Observable, from } from 'rxjs';


export const pingEpic = action$ =>
  action$.pipe(
    ofType('PING'),
    delay(1000),
    mapTo({ type: 'PONG' })
  );

export const artistDataEpic = action$ =>
  action$.pipe(
    ofType('FETCH_ARTIST_DATA'),
    // mergeMap(action =>
    // from(axios.get('https://jsonplaceholder.typicode.com/todos/1'))
    // .map(response => fetchData(response))
    // .catch(error => Observable.ofType(FETCH_DATA_FAIL)))
  );