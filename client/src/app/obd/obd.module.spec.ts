import { ObdModule } from './obd.module';

describe('ObdModule', () => {
  let obdModule: ObdModule;

  beforeEach(() => {
    obdModule = new ObdModule();
  });

  it('should create an instance', () => {
    expect(obdModule).toBeTruthy();
  });
});
