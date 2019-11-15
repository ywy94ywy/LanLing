import { Form, Col } from 'antd';

export default Form.create()(({ data, width, column, gutter, form, className }) => {
  let newRow = 0;
  const listWidth = (width - (column - 1) * gutter) / column;
  const { getFieldDecorator } = form;

  return (
    <Form style={{ width: width, overflow: 'hidden' }} className={className}>
      {data.map(({ name, label, component, rules, initialValue, span }, i) => {
        const colSpan = span || 1;
        if (newRow === column) {
          newRow = 0;
        }
        newRow += colSpan;

        return (
          <Col
            key={i}
            style={{
              float: 'left',
              width: `${listWidth * colSpan + (colSpan - 1) * gutter}px`,
              marginRight: `${newRow !== column && gutter}px`,
            }}
          >
            <Form.Item
              label={label}
              style={{
                width: `${listWidth * colSpan + (colSpan - 1) * gutter}px`,
              }}
            >
              {component &&
                getFieldDecorator(name || label, {
                  initialValue,
                  rules,
                })(component)}
            </Form.Item>
          </Col>
        );
      })}
    </Form>
  );
});
