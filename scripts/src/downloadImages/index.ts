import { writeFile } from 'fs/promises';
import axios from 'axios';

const getMembersData = async () => {
  return (await import('../../../src/db/result/member.json')).default;
};

const downloadImage = async (url: string, savePath: string) => {
  const result = await axios.get(url, {
    responseType: 'arraybuffer',
  });
  await writeFile(savePath, result.data);
  console.log(`${savePath} is saved!`);
};

const main = async () => {
  const membersData = await getMembersData();
  const profileImagesToDownload = membersData
    .filter(member => !member.graduation.isGraduated)
    .map(member => ({
      url: `https://img.nogizaka46.com/www/member/img/${member.name}_prof.jpg`,
      savePath: `../temp/${member.name}.jpg`,
    }));

  await Promise.all(
    profileImagesToDownload.map(({ url, savePath }) =>
      downloadImage(url, savePath)
    )
  );

  console.log('\nFinished!');
};

main();
