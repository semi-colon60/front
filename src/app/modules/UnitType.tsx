enum UnitType {
	Length,
	Mass,
	Volume,
	Count
}

export function getUnitName(unitType: UnitType) {
	switch (unitType) {
		case UnitType.Length:
			return "Length";
		case UnitType.Mass:
			return "Mass";
		case UnitType.Volume:
			return "Volume";
		case UnitType.Count:
			return "Count";
		default:
			return "Unknown";
	}
}

export function setUnitType(unitType: string) {
	switch (unitType) {
		case "Length":
			return UnitType.Length;
		case "Mass":
			return UnitType.Mass;
		case "Volume":
			return UnitType.Volume;
		case "Count":
			return UnitType.Count;
		default:
			return UnitType.Count;
	}
}

export default UnitType;