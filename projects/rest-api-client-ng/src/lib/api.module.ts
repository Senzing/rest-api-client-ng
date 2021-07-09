import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { Configuration, WebSocketConnectionConfiguration } from './configuration';
import { HttpClient } from '@angular/common/http';

import { AdminService } from './api/admin.service';
import { BulkDataService } from './api/bulkData.service';
import { ConfigService } from './api/config.service';
import { EntityDataService } from './api/entityData.service';
import { EntityGraphService } from './api/entityGraph.service';
import { StreamLoadingService } from './api/streamLoading.service';
import { SzPocWebSocketService } from './api/websocket.service';

@NgModule({
  imports:      [],
  declarations: [],
  exports:      [],
  providers: [
    AdminService,
    BulkDataService,
    ConfigService,
    EntityDataService,
    EntityGraphService,
    StreamLoadingService,
    SzPocWebSocketService
  ]
})
export class ApiModule {
    public static forRoot(configurationFactory: () => Configuration, @Optional() streamConfigurationFactory? : () => WebSocketConnectionConfiguration): ModuleWithProviders<ApiModule> {
        let _providers: Array<any> = [
            { provide: Configuration, useFactory: configurationFactory }
        ];
        if(streamConfigurationFactory) {
            _providers.push( 
                { 
                    provide: WebSocketConnectionConfiguration, 
                    useFactory: streamConfigurationFactory
                }
            );
        }
        
        return {
            ngModule: ApiModule,
            providers: _providers
        };
    }

    constructor( @Optional() @SkipSelf() parentModule: ApiModule,
                 @Optional() http: HttpClient) {
        if (parentModule) {
            throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
        }
        if (!http) {
            throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
            'See also https://github.com/angular/angular/issues/20575');
        }
    }
}
