// ... (imports)

import {
  Box,
  Checkbox,
  Divider,
  Radio,
  RadioGroup,
  Stack,
  Table,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import { permissionsData } from 'data/permissionsData';
import React, { useState } from 'react';
import PermissionIcon from '../icons/permission-icon';
interface PermissionsPageProps {}

interface SubPermission {
  name: string;
  types: string[];
}

export interface Permission {
  id: string;
  name: string;
  type: string;
  description: string;
  subPermissions?: SubPermission[];
}

interface CheckedPermissions {
  [key: string]: boolean;
}

interface InnerPermissions {
  [key: string]: {
    [subPermissionName: string]: boolean;
  };
}

const PermissionsPage: React.FC<PermissionsPageProps> = () => {
  const [selectedValue, setSelectedValue] = useState<string>('administrative');
  const [checkedPermissions, setCheckedPermissions] =
    useState<CheckedPermissions>({});
  const [innerPermissions, setInnerPermissions] = useState<InnerPermissions>(
    {}
  );

  const handleCheckboxToggle = (permissionId: string) => {
    setCheckedPermissions((prevCheckedPermissions) => ({
      ...prevCheckedPermissions,
      [permissionId]: !prevCheckedPermissions[permissionId],
    }));

    // Close inner permissions when a main permission is clicked
    setInnerPermissions((prevInnerPermissions) => ({
      ...prevInnerPermissions,
      [permissionId]: {},
    }));
  };

  const handleInnerCheckboxToggle = (
    permissionId: string,
    subPermissionName: string
  ) => {
    setInnerPermissions((prevInnerPermissions) => ({
      ...prevInnerPermissions,
      [permissionId]: {
        ...prevInnerPermissions[permissionId],
        [subPermissionName]:
          !prevInnerPermissions[permissionId][subPermissionName],
      },
    }));
  };

  const handleRadioChange = (value: string) => {
    setSelectedValue(value);
  };

  return (
    <>
      <Divider className="mx-5 mt-4" />
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th display="flex" gap="0.5em">
              <Checkbox w="20px" />
              <Text
                className="primary-font-semibold"
                fontSize="14px"
                color="#41454B"
              >
                Policy Name
              </Text>{' '}
            </Th>
            <Th>
              <Text
                className="primary-font-semibold"
                fontSize="14px"
                color="#41454B"
              >
                Type
              </Text>{' '}
            </Th>
            <Th>
              <Text
                className="primary-font-semibold"
                fontSize="14px"
                color="#41454B"
              >
                Description{' '}
              </Text>{' '}
            </Th>
          </Tr>
        </Thead>
        <tbody>
          {permissionsData.map((permission) => (
            <React.Fragment key={permission.id}>
              <Tr background="#E9F0F8" mb="1em">
                <Td
                  display="flex"
                  gap="0.5em"
                  mx="1.5em"
                  my="0em"
                  borderRadius="8"
                >
                  <Checkbox
                    w="20px"
                    isChecked={checkedPermissions[permission.id]}
                    onChange={() => handleCheckboxToggle(permission.id)}
                  />
                  <Box
                    background="#fff"
                    p="5px"
                    borderRadius="4"
                    cursor="pointer"
                    onClick={() => {
                      handleCheckboxToggle(permission.id);
                    }}
                  >
                    <PermissionIcon />
                  </Box>
                  <Text>{permission.name}</Text>
                </Td>
                <Td>
                  <Text>{permission.type}</Text>
                </Td>
                <Td>
                  <Text>{permission.description}</Text>
                </Td>
              </Tr>

              {permission.subPermissions &&
                checkedPermissions[permission.id] &&
                permission.subPermissions.map((subPermission) => (
                  <Tr key={subPermission.name}>
                    {/* Adjust the columns based on your needs */}{' '}
                    <Td
                      display="flex"
                      gap="0.5em"
                      mx="1.5em"
                      my="0em"
                      borderRadius="8"
                    >
                      <Checkbox
                        w="20px"
                        isChecked={
                          innerPermissions[permission.id]?.[subPermission.name]
                        }
                        onChange={() =>
                          handleInnerCheckboxToggle(
                            permission.id,
                            subPermission.name
                          )
                        }
                      />
                      <Box
                        background="#fff"
                        p="5px"
                        borderRadius="4"
                        cursor="pointer"
                        onClick={() => {
                          handleInnerCheckboxToggle(
                            permission.id,
                            subPermission.name
                          );
                        }}
                      >
                        <PermissionIcon />
                      </Box>
                      <Text>{subPermission.name}</Text>
                    </Td>
                    {innerPermissions[permission.id]?.[subPermission.name] && (
                      <Td>
                        <RadioGroup
                          onChange={handleRadioChange}
                          value={selectedValue}
                        >
                          <Stack direction="column">
                            {subPermission.types.map((type) => (
                              <Radio
                                key={type}
                                value={type}
                                position="relative"
                              >
                                {type}
                              </Radio>
                            ))}
                          </Stack>
                        </RadioGroup>
                      </Td>
                    )}
                  </Tr>
                ))}
            </React.Fragment>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default PermissionsPage;
