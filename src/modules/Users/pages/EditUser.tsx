import { EditOutlined, ManOutlined, WomanOutlined } from '@ant-design/icons';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Oval } from 'react-loader-spinner';
import styled from 'styled-components';
import { useFormik } from 'formik';

import * as Yup from 'yup';
import { AppDispatch, useAppSelector } from 'store/store';
import { getUserById, updateUserById } from 'store/users/ducks/thunks/users';
import theme from 'theme/theme';
import Spacer from 'common/components/Spacer/Spacer';
import Typography from 'common/components/Typography/Typography';
import { EMAIL_VALIDATION_PATTERN } from 'utils/validators';
import TextInput from 'common/components/TextInput/TextInput';
import Button from 'common/components/Button/Button';
import CustomSelect from 'common/components/CustomSelect/CustomSelect';
import { gendersUser, statusesUser } from 'utils/constants';

const VALIDATION_SCHEMA = Yup.object().shape({
  name: Yup.string().required('Name field is required'),
  email: Yup.string()
    .matches(EMAIL_VALIDATION_PATTERN, 'Invalid email address!')
    .required('Email field is required'),
});

const EditUser = () => {
  const { userId } = useParams();
  const navigate = useNavigate();

  const dispatch: AppDispatch = useDispatch();

  const [editMode, setEditMode] = useState<boolean>(false);

  const currentUser = useAppSelector((state) => state.users.reducers.currentUser);
  const loading = useAppSelector((state) => state.users.reducers.isLoading);

  const { values, handleSubmit, handleChange, errors, touched } = useFormik({
    initialValues: {
      name: currentUser?.name,
      email: currentUser?.email,
      gender: currentUser?.gender,
      status: currentUser?.status,
    },
    enableReinitialize: true,
    validationSchema: VALIDATION_SCHEMA,
    onSubmit: (val) => {
      if (!currentUser || !val.name || !val.email || !val.gender || !val.status) return;
      dispatch(
        updateUserById({
          data: {
            id: currentUser.id,
            name: val.name,
            email: val.email,
            gender: val.gender,
            status: val.status,
          },
          navigate,
        }),
      );
    },
  });

  useEffect(() => {
    if (userId) {
      dispatch(getUserById(userId));
    }
  }, [userId]);

  const handleEdit = () => {
    setEditMode(!editMode);
  };

  if (loading)
    return <Oval color={theme.colors.gray} height={100} secondaryColor={theme.colors.lightGray} />;

  return (
    <>
      <Spacer height={100} />
      <EditIconWrapper>
        <EditOutlined style={{ fontSize: 30 }} onClick={handleEdit} />
      </EditIconWrapper>
      <Spacer height={50} />
      {currentUser && (
        <CardWrapper>
          {editMode ? (
            <EditWrapper>
              <TextInput
                height={70}
                type="text"
                withBottomLine
                value={values.name ?? 0}
                onChange={handleChange('name')}
                placeholder="Start typing name"
                error={errors.name && touched.name ? errors.name : undefined}
              />
              <TextInput
                height={70}
                type="email"
                withBottomLine
                value={values.email ?? 0}
                onChange={handleChange('email')}
                placeholder="Start typing email"
                error={errors.email && touched.email ? errors.email : undefined}
              />
              <Spacer height={30} />
              <CustomSelect
                data={gendersUser}
                onChange={handleChange('gender')}
                value={values.gender ? values.gender : ''}
              />
              <Spacer height={30} />
              <CustomSelect
                data={statusesUser}
                onChange={handleChange('status')}
                value={values.status ? values.status : ''}
              />
              <Spacer height={30} />
              <Button
                height={50}
                width={140}
                label="Submit"
                borderRadius={50}
                bgColor={theme.colors.lightGray}
                labelColor={theme.colors.black}
                borderColor={theme.colors.black}
                onClick={handleSubmit}
              />
              <Spacer height={30} />
            </EditWrapper>
          ) : (
            <>
              <Name text={`Current name: ${currentUser.name}`} fontSize="fz28" />
              <Name text={`Current email: ${currentUser.email}`} fontSize="fz28" />
              {currentUser.gender === 'male' ? (
                <ManOutlined style={{ fontSize: 30 }} />
              ) : (
                <WomanOutlined style={{ fontSize: 30 }} />
              )}
              <Typography text={currentUser.status} fontSize="fz28" />
            </>
          )}
        </CardWrapper>
      )}
    </>
  );
};

const Name = styled(Typography)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${theme.colors.lightGray};
`;

const EditWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

const EditIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default EditUser;
