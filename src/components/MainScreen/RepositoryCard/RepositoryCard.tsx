import { Box, Typography } from '@mui/material';
import { Star, SwapCalls } from '@mui/icons-material';

import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { fetchReposAction } from '../../../features/repos/reposSlices';

import { useAppDispatch } from '../../../app/store';
import { IRepo, IStoreDataTypes } from '../../../app/types';

import useStyles from './styles';

interface IRepositoryCard {
  title: string | undefined;
  body: string | undefined;
  starCount: number | undefined;
  routeCount: number | undefined;
}

interface IHeading {
  heading: string | '';
}

function Card({ title, body, starCount, routeCount }: IRepositoryCard) {
  const classes = useStyles();
  return (
    <Box>
      <Box className={classes.card}>
        <Typography sx={{ fontSize: '1.3rem' }} className={classes.repoTitle}>
          {title}
        </Typography>
        <Typography sx={{ fontSize: '0.8rem' }}>{body}</Typography>
        <Box className={classes.repoIcons}>
          <div>
            <Star />
            <span>{starCount}</span>
          </div>
          <div>
            <SwapCalls />
            <span>{routeCount}kbs</span>
          </div>
        </Box>
      </Box>
    </Box>
  );
}
function RepositoryCard({ heading }: IHeading) {
  const classes = useStyles();
  const [user, setUser] = useState('Chayuga');
  // dispatch
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchReposAction(user));
  }, [dispatch]);

  const store = useSelector((state: IStoreDataTypes) => state?.repos);

  const { repos } = store;
  return (
    <Box className={classes.repositoryContainer}>
      <Typography className={classes.sectionHeader}>{heading}</Typography>
      <Box className={classes.repositoryCard}>
        {repos
          && repos.map((repo: IRepo) => (
            <Card
              title={repo?.name}
              body={
                repo?.description
                  ? repo?.description
                  : 'This Repository has no description to display...'
              }
              starCount={repo?.stargazers_count}
              routeCount={repo?.size}
            />
          ))}
      </Box>
    </Box>
  );
}

export default RepositoryCard;