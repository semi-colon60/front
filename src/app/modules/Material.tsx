export enum UnitType
{
	Length = 0,
	Mass,
	Volume,
	Count
}

export default interface Material {
	materialId: number;
	materialCode: string;
	description: string;
	unit: UnitType;
	unitPrice: string;
	mass: string;
	volume: string;
	count: number;
	length: string;
	mainGroupId: number;
	subGroupId: number;
}
