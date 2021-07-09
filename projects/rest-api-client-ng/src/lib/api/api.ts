export * from './admin.service';
import { AdminService } from './admin.service';
export * from './bulkData.service';
import { BulkDataService } from './bulkData.service';
export * from './config.service';
import { ConfigService } from './config.service';
export * from './entityData.service';
import { EntityDataService } from './entityData.service';
export * from './entityGraph.service';
import { EntityGraphService } from './entityGraph.service';
export * from './streamLoading.service'
import { StreamLoadingService } from './streamLoading.service';
export * from './websocket.service'
import { SzPocWebSocketService } from './websocket.service';

export const APIS = [AdminService, BulkDataService, ConfigService, EntityDataService, EntityGraphService, StreamLoadingService, SzPocWebSocketService];
