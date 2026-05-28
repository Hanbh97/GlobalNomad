"use client";

import Modal from "@/components/Modal/Modal";
import { useState } from "react";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);

  return (
    <>
      <h1>홈페이지</h1>
      <button onClick={() => setIsOpen(true)}>sm 모달</button>
      <br />
      <button onClick={() => setIsOpen2(true)}>md 모달</button>
      <br />
      <button onClick={() => setIsOpen3(true)}>lg 모달</button>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        sm 모달
      </Modal>
      <Modal isOpen={isOpen2} onClose={() => setIsOpen2(false)} size="md">
        md 모달
      </Modal>
      <Modal isOpen={isOpen3} onClose={() => setIsOpen3(false)} size="lg">
        lg 모달
      </Modal>
    </>
  );
};

export default Home;
