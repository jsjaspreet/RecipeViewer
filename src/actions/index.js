import axios from 'axios';

const ROOT_URL= `http://argoservice.prod-wc1.ypec.yp.com/ArgoService/scan?mode=full&app=argo`;

export const FETCH_SCAN_DATA = 'FETCH_SCAN_DATA';

export function fetchScanData(ypid) {
    const url = `${ROOT_URL}&ypid=${ypid}`;
    console.log(url);
    const request = axios.get(url);
    return {
        type: FETCH_SCAN_DATA,
        payload: request
    };
}