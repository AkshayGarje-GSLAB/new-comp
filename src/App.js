import React, { useState } from "react";
import moment from "moment";
import { Button } from "antd";
import { ExclamationCircleFilled } from "@ant-design/icons";
import {
  ButtonComponent,
  InputComponent,
  ModalComponent,
  CheckBox,
  RadioButton,
  SliderComponent,
  SelectComponent,
  Pagination,
  FullPieChart,
  HalfPieChart,
  CustomToolTip,
  BarChart,
  AreaChartComponent,
  TableComponent,
  AlertComponent,
  Text,
  EllipsisOptionComponent,
  Title,
  MultiSelect,
  DraggerComponent,
  RateComponent,
  ProgressBarComponent,
  DurationComponent,
} from "./lib/index";
import { data, columns, lineData1, barData, colors1, halfPieData, colors3, dataWith2Objects1 } from "./data/ChartsData";
import { alertTypes } from "./data/AlertMessageData";
import { arrayOptions } from "./data/MultiSelectData";
import colors from "./lib/common/styles/colors.module.scss";
import "./lib/common/styles/common.scss";
import "./App.scss";

function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [radioBtn, setRadioBtn] = useState("1");
  const text = "Text";
  const title = "Title";
  const [rateValue, setRateValue] = useState(2.5);
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [isSelectDurationVisible, setIsSelectDurationVisible] = useState(false);
  const [selected, setSelected] = useState(0);

  const selectedDateChange = (dates, dateStrings) => {
    setStartDate(dateStrings[0]);
    setEndDate(dateStrings[1]);
    const days =
      Math.abs(moment(dateStrings[0], "DD/MM/YYYY").startOf("day").diff(moment(dateStrings[1], "DD/MM/YYYY").startOf("day"), "days")) + 1;
    setSelected(days);
  };

  //function will be implemented later
  // const applyDuration = () => {
  //   setIsSelectDurationVisible(false);
  //   console.log("From: ", startDate, " To: ", endDate);
  // };

  const displayCalendar = (open) => {
    setIsSelectDurationVisible(!open);
  };
  const cancel = () => {
    setIsSelectDurationVisible(false);
  };

  const onInputChange = (e) => {
    console.log("onInputChange", e.target.value);
  };

  const onClickHandler = () => {
    console.log("Clicked from app");
  };

  const onChangeHandler = (e) => {
    console.log("Radio btn val:", e.target.value);
    setRadioBtn(e.target.value);
  };

  const radioOptions = [
    { label: "Label 1", value: "1" },
    { label: "Label 2", value: "2" },
  ];
  const radioOptions_1 = [
    { label: "Label 1", value: "1" },
    { label: "Label 2", value: "2" },
  ];

  const iconListOptions = [
    {
      label: "Finland",
      value: "1",
      key: "finland",
      icon: "https://img.icons8.com/office/16/000000/finland.png",
    },
    {
      label: "Switzerland",
      value: "2",
      key: "switzerland",
      icon: "https://img.icons8.com/office/16/000000/switzerland.png",
    },
  ];

  const groupList = [
    {
      groupKey: "group_1",
      groupLabel: "Asia",
      list: [
        { key: "India", label: "India", value: "ind" },
        { key: "Nepal", label: "Nepal", value: "nep" },
      ],
    },
    {
      groupKey: "group_2",
      groupLabel: "Pacific",
      list: [
        { key: "Bhutan", label: "Bhutan", value: "bhu", disable: true },
        { key: "Japan", label: "Japan", value: "jap" },
      ],
    },
  ];

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  const onChangeSlider = (value) => {
    console.log("onChange: ", value);
  };

  const onAfterChangeSlider = (value) => {
    console.log("onAfterChange: ", value);
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onRateChange = (value) => {
    setRateValue(value);
  };

  return (
    <div className="App theme-default">
      <div className="componentWrapper">
        <span>Primary Button :</span>
        <ButtonComponent type="primary">{"Library Button"}</ButtonComponent>
      </div>
      <div className="componentWrapper">
        <span>Input with Predix and postfix :</span>
        <InputComponent
          size="medium"
          placeholder="Enter a name "
          allowClear={false}
          addonBefore={false}
          addonAfter={false}
          prefix={false}
          suffix={false}
          defaultValue="Hello world"
          onChange={onInputChange}
          onPressEnter={onInputChange}
          autoFocusButton="autoFocusButton"
          width="25rem"
          height="100"
        />
      </div>
      <div className="componentWrapper">
        <span>Modal Component :</span>
        <ModalComponent
          button={true}
          showModal={showModal}
          visible={isModalVisible}
          handleOk={handleOk}
          handleCancel={handleCancel}
          title="Delete User"
          message="Are you sure you want to delete this"
          firstName="Demo"
          lastName="User"
          closable={true}
          logo={<ExclamationCircleFilled />}
          cancelBtnName="Cancel"
          okBtnName="Delete"
        >
          <ModalComponent.Icon>
            <ExclamationCircleFilled />
          </ModalComponent.Icon>
          <ModalComponent.H1>{"Delete User"}</ModalComponent.H1>
          <ModalComponent.Text>
            {"Are you sure you want to delete this"} {`Demo User?`}
          </ModalComponent.Text>
          <div className="modal-btn-wrapper">
            <ModalComponent.Cancel onClick={handleCancel}>{"Cancel"}</ModalComponent.Cancel>
            <ModalComponent.Proceed onClick={handleOk}>{"Delete"}</ModalComponent.Proceed>
          </div>
        </ModalComponent>
      </div>
      <div className="componentWrapper_test">
        <span>Single CheckBox :</span>
        <CheckBox defaultChecked disabled onClick={onClickHandler} isGroup={false}>
          {"Library Checkbox"}
        </CheckBox>
      </div>
      <div className="componentWrapper_test">
        <span>Group of CheckBox : </span>&nbsp;&nbsp;
        <CheckBox options={radioOptions} disabled={false} onClick={onClickHandler} isGroup={true} />
      </div>
      <div className="componentWrapper_test">
        <span>Radio Button :</span>&nbsp;&nbsp;
        <RadioButton options={radioOptions} disabled={false} value={radioBtn} onChange={onChangeHandler} />
      </div>
      <div className="componentWrapper_test">
        <span>Radio Button :</span>&nbsp;&nbsp;
        <RadioButton options={radioOptions_1} disabled={true} value={radioBtn} onChange={onChangeHandler} />
      </div>
      <div className="componentWrapper">
        <span>Group of CheckBox : </span>
        <CheckBox options={radioOptions} disabled={false} onClick={onClickHandler} isGroup={true} />
      </div>
      <div className="componentWrapper">
        <span>Radio Button :</span>
        <RadioButton options={radioOptions} disabled={false} value={radioBtn} onChange={onChangeHandler} />
      </div>
      <div className="componentWrapper">
        <span>Select Dropdown with icon :</span>
        <SelectComponent
          arrow={true}
          isGroup={false}
          search={true}
          width={160}
          height={28}
          optionData={iconListOptions}
          allowClear={true}
          disabled={false}
          placeholder="Select label"
          onChange={handleChange}
        />
      </div>
      <div className="componentWrapper">
        <span>Select Dropdown with grouping :</span>
        <SelectComponent
          arrow={true}
          search={true}
          isGroup={true}
          width={300}
          height={28}
          mode="tags"
          optionData={groupList}
          allowClear={true}
          disabled={false}
          onChange={handleChange}
        />
      </div>
      <div className="componentWrapper">
        <SliderComponent
          onChange={onChangeSlider}
          onAfterChange={onAfterChangeSlider}
          defaultValue={20}
          disabled={false}
          autoFocus={true}
          dots={false}
          reverse={false}
        />
      </div>
      <div className="componentWrapper">
        <Pagination
          total={85}
          defaultPageSize={10}
          defaultCurrent={1}
          disabled={false}
          pageSizeOptions={[10, 20, 40, 100]}
          position="topLeft"
        />
      </div>
      <div className="componentWrapper">
        <FullPieChart
          width={800}
          height={400}
          startAngle={90}
          endAngle={450}
          data={dataWith2Objects1}
          COLORS={colors3}
          coordinateX={300}
          coordinateY={150}
          innerRadius={72}
          outerRadius={80}
          paddingAngle={0}
          position="center"
          verticalAlign="middle"
          layout="horizontal"
          align="right"
          fill={colors.colorBlue10}
          dataKey="value"
        />
      </div>
      <div className="componentWrapper">
        <HalfPieChart
          width={600}
          height={270}
          data={halfPieData}
          COLORS={colors1}
          coordinateX={300}
          coordinateY={150}
          startAngle={180}
          endAngle={0}
          innerRadius={72}
          outerRadius={80}
          position="center"
        />
      </div>
      <div className="componentWrapper">
        <BarChart
          active={true}
          data={barData}
          color1={colors.colorBlue12}
          color2={colors.colorgray6}
          width={450}
          height={200}
          hideX={false}
          hideY={true}
          axisLineX={false}
          tickLineX={false}
          dataKey="name"
        />
      </div>
      <div className="componentWrapper">
        <AreaChartComponent
          containerWidth="55%"
          aspect={2.5}
          width="500"
          height="400"
          data={lineData1}
          hideX={false}
          hideY={true}
          horizontal={false}
          vertical={true}
          strokeWidth={6}
          strokeDasharray="4"
          color={[colors.colorBlue12]}
          gradientColor={colors.colorBlue13}
          marginTop={10}
          marginRight={30}
          marginLeft={40}
          marginBottom={0}
          axisLineX={false}
          tickLineX={false}
          strokes={false}
          areaDataKey={["pv"]}
        />
      </div>
      <div className="componentWrapper">
        <TableComponent
          columns={columns}
          rows={data}
          total={85}
          defaultPageSize={10}
          defaultCurrent={1}
          paginationDisabled={false}
          position="bottomRight"
          pageSizeOptions={[20, 30, 100]}
          rowSelectionEnabled
        />
      </div>
      <div className="componentWrapper">
        <CustomToolTip title="Hello-world" placement="topLeft">
          <Button> Hello world </Button>
        </CustomToolTip>
      </div>
      <p> Mixins is working properly</p>

      {alertTypes.map((res, index) => {
        return (
          <div key={index}>
            <AlertComponent type={res.type} message={res.message} showIcon={res.showIcon} closable={res.closable} />
          </div>
        );
      })}
      <div>
        <div>
          <Text className="body-short-text">{text}</Text>
          <Text className="body-long-text">{text}</Text>
          <Text className="label-bold">{text}</Text>
          <Text className="label-regular">{text}</Text>
          <Text className="label-graph">{text}</Text>
          <br />
          <Title className="heading">{title}</Title>
          <Title className="sub-heading">{title}</Title>
          <Title className="title">{title}</Title>
          <Title className="sub-title">{title}</Title>
          <Title className="body-title">{title}</Title>
        </div>
      </div>
      <div>
        <MultiSelect
          mode="multiple"
          placeholder="Enter"
          options={arrayOptions}
          onChange={(value) => {
            console.log(value);
          }}
          maxTagCount="responsive"
        ></MultiSelect>
      </div>
      <div className="dragger-test">
        <DraggerComponent accept={[".png", ".jpg", ".svg"]} child={"Hello"}></DraggerComponent>
      </div>
      <EllipsisOptionComponent />
      <div>
        <RateComponent allowClear={false} allowHalf={true} value={rateValue} onChange={onRateChange} />
      </div>
      <div>
        <ProgressBarComponent percent={50} size="small" className="progress-bar" showInfo />
      </div>

      <div>
        <DurationComponent
          isSelectDurationVisible={isSelectDurationVisible}
          startDate={startDate}
          endDate={endDate}
          // applyDuration={applyDuration}
          onChange={selectedDateChange}
          selected={selected}
          cancel={cancel}
          displayCalendar={displayCalendar}
          day=" day"
          days=" days"
          applyBtnName="Apply"
          cancelBtnName="Cancel"
        />
      </div>
    </div>
  );
}

export default App;
