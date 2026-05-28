import TextInput from "@/components/Input/TextInput";

const Home = () => {
  return (
    <div>
      <TextInput
        id="2"
        name="name22"
        label="아이디"
        placeholder="아이디를 입력하세요"
        type="text"
      />
      <div>
        <span>
          <TextInput
            id="1"
            name="name"
            label="비밀번호"
            placeholder="비밀번호를 입력하세요"
            type="password"
          />
        </span>
        <span>
          <TextInput
            id="1"
            name="name"
            label="비밀번호"
            placeholder="비밀번호를 입력하세요"
            type="text"
            disabled
          />
        </span>
      </div>
    </div>
  );
};

export default Home;
