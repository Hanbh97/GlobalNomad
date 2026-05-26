import Button from "@/components/common/Button";

const TestpageButton = () => {
  return (
    <div style={{ display: "flex", gap: "40px", padding: "40px" }}>
      {/* primary버튼 (default) */}
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <Button variant="primary" size="lg">
          primary버튼 lg (default)
        </Button>
        <Button variant="primary" size="md">
          primary버튼 md (default)
        </Button>
        <Button variant="primary" size="sm">
          primary버튼 sm (default)
        </Button>
        <Button variant="primary" size="lg" disabled>
          primary버튼 비활성화
        </Button>
      </div>

      {/* secondary버튼 (소셜 간편로그인) */}
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <Button variant="secondary" size="lg">
          카카오 간편로그인 lg
        </Button>
        <Button variant="secondary" size="md">
          카카오 간편로그인 md
        </Button>
        <Button variant="secondary" size="sm">
          카카오 간편로그인 sm
        </Button>
        <Button variant="secondary" size="sm" disabled>
          secondary버튼 비활성화
        </Button>
      </div>

      {/* text버튼(유저 아이콘 포함) —  긴 텍스트 */}
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <Button variant="text" size="lg">
          User 아이콘 + 텍스트 lg
        </Button>
        <Button variant="text" size="lg">
          User 아이콘 + 텍스트 md
        </Button>
        <Button variant="text" size="lg">
          User 아이콘 + 텍스트 sm
        </Button>

        {/* text버튼(유저 아이콘 포함) —  짧은 텍스트 */}
        <Button variant="text" size="lg">
          김유자 lg
        </Button>
        <Button variant="text" size="md">
          김유자
        </Button>
        <Button variant="text" size="sm">
          김유자 sm
        </Button>
      </div>
    </div>
  );
};

export default TestpageButton;
