import {
    EngineLoad,
    CoolantTemp,
    FuelPressure,
    IntakePressure,
    Rpm,
    TimingAdvance,
    FuelStatus,
    Speed,
    MassAirflowRate,
    ThrottlePosition,
    RunTime,
    FuelRailPressureVacuum,
    FuelRailPressureDirect,
    FuelLevel,
    EthanolPercentage,
    OilTemp,
    FuelInjectionTiming
} from './../models/obd.models';
import { State, Action, StateContext } from '@ngxs/store';
import { UpdateObdState } from '../actions/obd.actions';
import { ObdService } from '../services/obd.service';
import { tap } from 'rxjs/operators';

export interface ObdStateModel {
    fuelStatus: FuelStatus;
    engineLoad: EngineLoad;
    coolantTemp: CoolantTemp;
    fuelPressure: FuelPressure;
    intakePressure: IntakePressure;
    rpm: Rpm;
    speed: Speed;
    timingAdvance: TimingAdvance;
    intakeTemp: IntakePressure;
    massAirflowRate: MassAirflowRate;
    throttlePosition: ThrottlePosition;
    runTime: RunTime;
    fuelRailPressureVacuum: FuelRailPressureVacuum;
    fuelRailPressureDirect: FuelRailPressureDirect;
    fuelLevel: FuelLevel;
    ethanolPercentage: EthanolPercentage;
    oilTemp: OilTemp;
    fuelInjectionTiming: FuelInjectionTiming;
}

@State<ObdStateModel>({
    name: 'obd',
    defaults: {
        fuelStatus: {
            value: '',
            unit: 'none'
        },
        engineLoad: {
            value: 0,
            unit: 'percent'
        },
        coolantTemp: {
            value: 0,
            unit: 'celsius'
        },
        fuelPressure: {
            value: 0,
            unit: 'kilopascal'
        },
        intakePressure: {
            value: 0,
            unit: 'kilopascal'
        },
        rpm: {
            value: 0,
            unit: 'rpm'
        },
        speed: {
            value: 0,
            unit: 'kph'
        },
        timingAdvance: {
            value: 0,
            unit: 'degrees'
        },
        intakeTemp: {
            value: 0,
            unit: 'kilopascal'
        },
        massAirflowRate: {
            value: 0,
            unit: 'gps'
        },
        throttlePosition: {
            value: 0,
            unit: 'percent'
        },
        runTime: {
            value: 0,
            unit: 'seconds'
        },
        fuelRailPressureVacuum: {
            value: 0,
            unit: 'kilopascal'
        },
        fuelRailPressureDirect: {
            value: 0,
            unit: 'kilopascal'
        },
        fuelLevel: {
            value: 0,
            unit: 'percent'
        },
        ethanolPercentage: {
            value: 0,
            unit: 'percent'
        },
        oilTemp: {
            value: 0,
            unit: 'celsius'
        },
        fuelInjectionTiming: {
            value: 0,
            unit: 'degrees'
        }
    }
})
export class ObdState {
    constructor(private obdService: ObdService) {}

    @Action(UpdateObdState)
    updateObdState(ctx: StateContext<ObdStateModel>) {
        return this.obdService.getLatestData()
            .pipe(
                tap((result) => ctx.patchState(result))
            );
    }
}
