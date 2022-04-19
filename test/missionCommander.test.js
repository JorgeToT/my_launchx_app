const MissionCommander = require("../app/missionCommander");
describe("Unit Test for Mission Commander Class", () => {
  test("1) Create a mission commander object", () => {
    const myMissionCommander = new MissionCommander("Jorge");
    expect(myMissionCommander.name).toBe("Jorge");
  });
});
