

export interface Runtime {
    value: number;
    unit: 'seconds';
    max: 0;
    min: 0;
}

export interface FuelType {
    value: string;
    unit: 'none';
    max: 0;
    min: 0;
}

export interface FuelStatus {
    value: string;
    unit: 'none';
    max: 0;
    min: 0;
}

export interface TimingAdvance {
    value: number;
    unit: 'degrees';
    max: 360;
    min: 0;
}

export interface EngineLoad {
    value: number;
    unit: 'percent';
    max: 1;
    min: 0;
}

export interface CoolantTemp {
    value: number;
    unit: 'celsius';
    max: 140;
    min: 0;
}

export interface Rpm {
    value: number;
    unit: 'rpm';
    max: 10000;
    min: 0;
}

export interface Speed {
    value: number;
    unit: 'kph';
    max: 210;
    min: 0;
}

export interface FuelPressure {
    value: number;
    unit: 'kilopascal';
    max: 80;
    min: 0;
}

export interface IntakePressure {
    value: number;
    unit: 'kilopascal';
    max: 15;
    min: 0;
}

export interface IntakeTemp {
    value: number;
    unit: 'celsius';
    max: 120;
    min: -40;
}

export interface MassAirflowRate {
    value: number;
    unit: 'gps';
    max: 10000;
    min: 0;
}

export interface ThrottlePosition {
    value: number;
    unit: 'percent';
    max: 1;
    min: 0;
}

export interface RunTime {
    value: number;
    unit: 'seconds';
    max: 0;
    min: 0;
}

export interface FuelRailPressureVacuum {
    value: number;
    unit: 'kilopascal';
    max: 552;
    min: 0;
}

export interface FuelRailPressureDirect {
    value: number;
    unit: 'kilopascal';
    max: 552;
    min: 0;
}

export interface FuelLevel {
    value: number;
    unit: 'percent';
    max: 1;
    min: 0;
}

export interface EthanolPercentage {
    value: number;
    unit: 'percent';
    max: 1;
    min: 0;
}

export interface OilTemp {
    value: number;
    unit: 'celsius';
    max: 135;
    min: 0;
}

export interface FuelInjectionTiming {
    value: number;
    unit: 'degrees';
    max: 360;
    min: 0;
}

export interface AmbiantAirTemp {
    value: number;
    unit: 'celsius';
    max: 120;
    min: 0;
}

