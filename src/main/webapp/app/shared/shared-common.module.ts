import { NgModule } from '@angular/core';

import { OnlineStoreSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [OnlineStoreSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [OnlineStoreSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class OnlineStoreSharedCommonModule {}
