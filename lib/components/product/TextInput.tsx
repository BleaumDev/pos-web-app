import { SearchIcon } from '@chakra-ui/icons';
import { Image, Input } from '@chakra-ui/react';

export function TextInput(): React.ReactElement {
  return (
    <div
      style={{
        backgroundColor: '#F8FBF8',
        paddingTop: 2,
        paddingBottom: 2,
      }}
      className="flex flex-row items-center pl-4 rounded-lg"
    >
      <SearchIcon />
      <Input
        style={{
          background: '#F8FBF8',
        }}
        className="ml-4"
        width={517}
        borderColor="none"
        variant={'unstyled'}
        placeholder="Scan/Search Product by Code or Name here..."
      />
      <Image
        src="/images/arrow-right.png"
        // className="py-1.5"
        style={{
          width: 30,
          height: 30,
        }}
      />
    </div>
  );
}
