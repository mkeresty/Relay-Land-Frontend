import { GetServerSidePropsContext, NextPage } from "next";
import { useRouter } from "next/router";
import { GuildMenuItem } from "../../components/guilds/GuildMenuItem";
import { fetchMutualGuilds } from "../../utils/api";
import { Guild } from "../../utils/types";
import styles from './index.module.scss';
import axios from 'axios';
import https from 'https';
import { Button, useDisclosure } from "@chakra-ui/react";
import React from "react";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react';



type Props = {
    guilds: Guild[];
};

const MenuPage: NextPage<Props> = ({ guilds })=> {
    const router = useRouter();

    const OverlayOne = () => (
        <ModalOverlay
          bg='blackAlpha.300'
          backdropFilter='blur(10px) hue-rotate(90deg)'
        />
      );

    const { isOpen, onOpen, onClose } = useDisclosure()
    const [overlay, setOverlay] = React.useState(<OverlayOne />)
      
    const letssee= () => {
        if(5>1){
            console.log('tru')
            setOverlay(<OverlayOne />)
            onOpen()

        }
    };

    return (
        
        <div className="page">
                <>
      <Button
        onClick={() => {
            letssee()
        }}
      >
        Use Overlay one
      </Button>

      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        {overlay}
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div>Custom backdrop filters!</div>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>




            <div margin-left="22%" align-items="center" >
                {guilds.map((guild) => (
                    <div key={guild.id} onClick={() => router.push(`/dashboard/${guild.id}/balance`)}><GuildMenuItem guild={guild}/>    
                    </div>
                ))}
            </div>
        </div>
    );
};
export async function getServerSideProps(context: GetServerSidePropsContext) {
    return( 
        fetchMutualGuilds(context)
        //fetchfinal(context)
        //fetchme(context)
    );
}

export default MenuPage;