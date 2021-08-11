import { css } from '@emotion/react';
import { Menu } from '@headlessui/react';
import { Fragment } from 'react';
import { motion } from 'framer-motion';
import { Typography } from 'client/components/atoms/Typography';
import { BaseButton } from 'client/components/v6/shared/buttons/base/BaseButton';
import { BaseLink } from 'client/components/v6/shared/buttons/base/BaseLink';
import { RadioIcon } from 'client/components/v6/shared/icons/RadioIcon';
import { commonStyles } from 'client/styles/tokens';
import { MenuDownIcon } from 'client/components/v6/shared/icons/MenuDownIcon';
import { getColorVarName } from 'client/styles/tokens/colors';

const menuItemButtonStyles = css`
  width: 100%;
  padding-top: ${commonStyles.spacing.xs};
  padding-bottom: ${commonStyles.spacing.xs};
  padding-left: ${commonStyles.spacing.m};
  padding-right: ${commonStyles.spacing.l};
  box-sizing: border-box;
  display: flex;
  align-items: center;
`;

const menuItemLabelStyles = css`
  margin-left: ${commonStyles.spacing.xs};
  text-transform: capitalize;
  height: 24px;
  line-height: 24px;
`;

type MenuItem = {
  label: string;
  isSelected: boolean;
} & (
  | {
      component: 'button';
      onClick: () => void;
    }
  | {
      component: 'link';
      href: string;
    }
);

export type SettingMenuProps = {
  buttonLabel: string;
  items: MenuItem[];
};

export const SettingMenu: React.VFC<SettingMenuProps> = props => {
  const { buttonLabel, items } = props;

  return (
    <Menu
      as="div"
      css={css`
        display: inline-block;
        position: relative;
      `}
    >
      {({ open }) => (
        <Fragment>
          {/* @ts-ignore */}
          <Menu.Button as={Fragment}>
            <BaseButton
              css={css`
                display: inline-flex;
                align-items: center;
              `}
            >
              <Typography
                variant="h6"
                element="span"
                css={css`
                  text-transform: uppercase;
                `}
              >
                {buttonLabel}
              </Typography>
              <MenuDownIcon
                css={css`
                  fill: var(${getColorVarName('onBackground', 'standard')});
                  margin-left: ${commonStyles.spacing.xs};
                  transition: transform 0.2s cubic-bezier(0, 0.5, 0.7, 1);
                  transform: rotate(${open ? '0.5turn' : '0turn'});
                `}
              />
            </BaseButton>
          </Menu.Button>
          {open && (
            // @ts-ignore
            <Menu.Items static as={Fragment}>
              <motion.div
                initial="closed"
                animate="open"
                variants={{
                  open: { scale: 1, opacity: 1 },
                  closed: { scale: 0, opacity: 0 },
                }}
                transition={{ duration: 0.2, ease: [0, 0.5, 0.7, 1] }}
                style={{ originX: 1, originY: 0 }}
                css={css`
                  position: absolute;
                  right: 0;
                  margin-top: ${commonStyles.spacing.xs};
                  background-color: var(
                    ${getColorVarName('background', 'standard')}
                  );
                  border: 2px solid
                    var(${getColorVarName('onBackground', 'variant0')});
                `}
              >
                <ul>
                  {items.map(item => (
                    // @ts-ignore
                    <Menu.Item
                      key={item.label}
                      as="li"
                      disabled={item.isSelected}
                      css={css`
                        width: 100%;
                      `}
                    >
                      {({ active }) =>
                        item.component === 'button' ? (
                          <BaseButton
                            disabled={item.isSelected}
                            active={active}
                            hideBorder
                            css={menuItemButtonStyles}
                            onClick={item.onClick}
                          >
                            <RadioIcon isChecked={item.isSelected} />
                            <Typography
                              variant="body2"
                              element="span"
                              css={menuItemLabelStyles}
                            >
                              {item.label}
                            </Typography>
                          </BaseButton>
                        ) : (
                          <BaseLink
                            disabled={item.isSelected}
                            active={active}
                            hideBorder
                            css={menuItemButtonStyles}
                            href={item.href}
                          >
                            <RadioIcon isChecked={item.isSelected} />
                            <Typography
                              variant="body2"
                              element="span"
                              css={menuItemLabelStyles}
                            >
                              {item.label}
                            </Typography>
                          </BaseLink>
                        )
                      }
                    </Menu.Item>
                  ))}
                </ul>
              </motion.div>
            </Menu.Items>
          )}
        </Fragment>
      )}
    </Menu>
  );
};
