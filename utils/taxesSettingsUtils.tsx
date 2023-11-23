import { Box, Td } from '@chakra-ui/react';

export function mapTaxesSettingDataToRows(
  taxesData: Array<any>
): Array<JSX.Element[]> {
  return taxesData.map((tax) => [
    <Td className="text-center" key="taxName">
      {tax.taxName}
    </Td>,
    <Td className="text-center" key="taxRate">
      {tax.taxRate}
    </Td>,
    <Td
      className={
        tax.taxApplies === 'Limited Products'
          ? 'gradientText text-center'
          : 'text-center'
      }
      key="taxApplies"
    >
      {tax.taxApplies}
    </Td>,

    <Td
      className="text-center"
      key="compoundTax"
      display="flex"
      alignContent="center"
      justifyContent="center"
      gap="2em"
      border="none !important"
      color={
        tax.compoundTax === 'Applicable' ? 'rgba(8, 117, 76, 1)' : '#FF1E1E'
      }
    >
      <Box>{tax.compoundTax}</Box>
    </Td>,
  ]);
}
