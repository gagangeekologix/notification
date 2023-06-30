import { ExternalLinkIcon, ViewIcon } from "@chakra-ui/icons"
import {
  Box,
  SimpleGrid,
  Text,
  Flex,
  Heading,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  HStack,
  Divider,
  Button,
  Avatar,
  Image,
  Stack,
  ButtonGroup
} from "@chakra-ui/react"
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchQuizData();
  }, []);
  const handleClick = async (_id) => {
    try {
      const res = await fetch(`http://localhost:3001/api/users/items/${_id}`, {
        method: 'DELETE',
      });
      if (!res.ok) {
        throw new Error('Failed to delete item');
      }
      console.log('Item deleted successfully');
      // Perform any additional actions after successful deletion
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };
  

  const fetchQuizData = async () => {
    try {
      const res = await fetch('https://blog1-br26.onrender.com/api/users/items');
      if (!res.ok) {
        throw new Error('Failed to fetch quiz data');
      }
      const data = await res.json();
      console.log(data)
      setTasks(data.results);
    } catch (error) {
      console.error('Error fetching quiz data:', error);
    }
  };

  return (
    <SimpleGrid spacing={10} minChildWidth={300}>
      {tasks.map(results => (
        <Card key={results._id} borderTop="8px" borderLef borderColor="#eddea4" bg="#e0e1dd">
          <CardBody>
            <Image
              src={results.image}
              alt='Green double couch with wooden legs'
              borderRadius='lg'
            />
            <Stack mt='6' spacing='3'>
              <Heading size='md'>{results.title}</Heading>
              <Text>
                {results.description.slice(0, 130)} ...
              </Text>
              <Text color='blue.600' fontSize='2xl'>
                Created  {results.createdAt.slice(0, 10)}
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup spacing='2'>

              <Button variant='ghost' colorScheme='red' onClick={() => handleClick(results._id)} >
                DELETE
              </Button>
              <Button variant='ghost' colorScheme='green'><NavLink to={`/editblog/${results._id}`}>

                
              </NavLink>
                VIEW
              </Button>
              <Button variant='ghost' colorScheme='blue'><NavLink to={`/editblog/${results._id}`}>

                EDIT
              </NavLink>

              </Button>

            </ButtonGroup>
          </CardFooter>
        </Card>
      ))}
    </SimpleGrid>
  )
}
