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
    FuelInjectionTiming,
    AmbiantAirTemp,
    FuelType,
    IntakeTemp
} from './../models/obd.models';
import { State, Action, StateContext } from '@ngxs/store';
import { UpdateObdState } from '../actions/obd.actions';
import { ObdService } from '../services/obd.service';
import { tap, map, max } from 'rxjs/operators';

export interface ObdStateModel {
    fuelStatus: FuelStatus;
    engineLoad: EngineLoad;
    coolantTemp: CoolantTemp;
    fuelPressure: FuelPressure;
    intakePressure: IntakePressure;
    rpm: Rpm;
    speed: Speed;
    timingAdvance: TimingAdvance;
    intakeTemp: IntakeTemp;
    maf: MassAirflowRate;
    throttlePos: ThrottlePosition;
    runTime: RunTime;
    fuelRailPressureVac: FuelRailPressureVacuum;
    fuelRailPressureDirect: FuelRailPressureDirect;
    fuelLevel: FuelLevel;
    fuelType: FuelType;
    ethanolPercent: EthanolPercentage;
    oilTemp: OilTemp;
    fuelInjectTiming: FuelInjectionTiming;
    ambiantAirTemp: AmbiantAirTemp;
}

@State<ObdStateModel>({
    name: 'obd',
    defaults: {
        fuelStatus: {
            value: null,
            unit: 'none',
            max: 0,
            min: 0
        },
        engineLoad: {
            value: null,
            unit: 'percent',
            max: 1,
            min: 0
        },
        coolantTemp: {
            value: null,
            unit: 'celsius',
            max: 140,
            min: 0
        },
        fuelPressure: {
            value: null,
            unit: 'kilopascal',
            max: 80,
            min: 0
        },
        intakePressure: {
            value: null,
            unit: 'kilopascal',
            max: 15,
            min: 0
        },
        rpm: {
            value: null,
            unit: 'rpm',
            max: 10000,
            min: 0
        },
        speed: {
            value: null,
            unit: 'kph',
            max: 210,
            min: 0
        },
        timingAdvance: {
            value: null,
            unit: 'degrees',
            max: 360,
            min: 0
        },
        intakeTemp: {
            value: null,
            unit: 'celsius',
            max: 120,
            min: -40
        },
        maf: {
            value: null,
            unit: 'gps',
            max: 10000,
            min: 0
        },
        throttlePos: {
            value: null,
            unit: 'percent',
            max: 1,
            min: 0
        },
        runTime: {
            value: null,
            unit: 'seconds',
            max: 0,
            min: 0
        },
        fuelRailPressureVac: {
            value: null,
            unit: 'kilopascal',
            max: 552,
            min: 0
        },
        fuelRailPressureDirect: {
            value: null,
            unit: 'kilopascal',
            max: 552,
            min: 0
        },
        fuelLevel: {
            value: null,
            unit: 'percent',
            max: 1,
            min: 0
        },
        fuelType: {
            value: null,
            unit: 'none',
            max: 0,
            min: 0
        },
        ethanolPercent: {
            value: null,
            unit: 'percent',
            max: 1,
            min: 0
        },
        oilTemp: {
            value: null,
            unit: 'celsius',
            max: 135,
            min: 0
        },
        fuelInjectTiming: {
            value: null,
            unit: 'degrees',
            max: 360,
            min: 0
        },
        ambiantAirTemp: {
            value: null,
            unit: 'celsius',
            max: 120,
            min: 0
        }
    }
})
export class ObdState {
    constructor(private obdService: ObdService) {}

    @Action(UpdateObdState)
    updateObdState(ctx: StateContext<ObdStateModel>) {
        return this.obdService.getLatestData()
            .pipe(
                map(this.lowercaseKeys),
                map(this.convertSnakeToCamel),
                map((result) => {
                    const config = ctx.getState();
                    for (const key of Object.keys(result)) {
                        if (key in config) {
                            result[key] = Object.assign(config[key], {value: result[key]});
                        }
                    }
                    return result;
                }),
                tap((result) => ctx.patchState(result))
            );
    }

    private lowercaseKeys(obj: any): any {
        const config = {};
        for (const key of Object.keys(obj)) {
            config[key.toLowerCase()] = obj[key];
        }
        return config;
    }

    private convertSnakeToCamel(obj: any): any {
        const config = {};
        for (const key of Object.keys(obj)) {
            config[key.replace(/(\_\w)/g, m => m[1].toUpperCase())] = obj[key];
        }
        return config;
    }
}
