import { InjectionToken } from '@angular/core';

export const BASE_PATH              = new InjectionToken<string>('basePath');
export const WEBSOCKET_BASE_PATH    = new InjectionToken<string>('webSocketBasePath');
export const USE_SSL                = new InjectionToken<string>('webSocketBasePath');
export const COLLECTION_FORMATS     = {
    'csv': ',',
    'tsv': '   ',
    'ssv': ' ',
    'pipes': '|'
}
