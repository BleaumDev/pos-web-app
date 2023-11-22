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
import LockPermissionIcon from '../icons/lock-permission-icon';
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
    [subPermissionName: string]: {
      isChecked: boolean;
      selectedValue?: string;
    };
  };
}

const PermissionsPage: React.FC<PermissionsPageProps> = () => {
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
    setInnerPermissions((prevInnerPermissions: any) => ({
      ...prevInnerPermissions,
      [permissionId]: {
        ...prevInnerPermissions[permissionId],
        [subPermissionName]:
          !prevInnerPermissions[permissionId][subPermissionName],
        selectedValue: undefined, // Reset selectedValue when inner checkbox is toggled
      },
    }));
  };

  const handleRadioChange = (
    permissionId: string,
    subPermissionName: string,
    value: string
  ) => {
    setInnerPermissions((prevInnerPermissions: any) => ({
      ...prevInnerPermissions,
      [permissionId]: {
        ...prevInnerPermissions[permissionId],
        selectedValue: value,
      },
    }));
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
                textTransform="capitalize"
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
              <Tr background="#E9F0F8" mb="1em" borderBottom="8px solid #fff">
                <Td display="flex" gap="0.5em" my="0em" borderRadius="8">
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
                    {checkedPermissions[permission.id] ? (
                      <PermissionIcon />
                    ) : (
                      <LockPermissionIcon />
                    )}
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
                          innerPermissions[permission.id]?.[
                            subPermission.name
                          ] as any
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
                        {innerPermissions[permission.id]?.[
                          subPermission.name
                        ] ? (
                          <PermissionIcon />
                        ) : (
                          <LockPermissionIcon />
                        )}
                      </Box>
                      <Text>{subPermission.name}</Text>
                    </Td>
                    {innerPermissions[permission.id]?.[subPermission.name] && (
                      <Box ml="5em" my="10px">
                        <RadioGroup
                          onChange={(value) =>
                            handleRadioChange(
                              permission.id,
                              subPermission.name,
                              value
                            )
                          }
                          value={
                            innerPermissions[permission.id]?.[
                              subPermission.name
                            ]?.selectedValue
                          }
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
                      </Box>
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
