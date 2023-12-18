export enum UnitType
{
	Length = 0,
	Mass,
	Volume,
	Count
}
export default interface CartItemInfosDTO{
    id: number;
	_MaterialCode: string;
	_Description: string;
	_Unit: string;
	_UnitPrice: string;
	_Mass: string;
	_Volume: string;
	_Count: number;
	_MainGroupId: number;
	_SubGroupId: number;
    _MainGroupName: string;
    _SubGroupName: string;
    _Result: number;
    _Quantity: number;
}