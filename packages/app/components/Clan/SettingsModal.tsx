import React from 'react';
import { Button, CheckBox, Input, Layout } from "@ui-kitten/components";
import { useSettings } from "../../hooks/useSettings";
import { UpdateWrapper } from "../../screens/Settings/Notifications";

export interface ClanSettingsModalProps {
  clan_id: number;
  close: () => void;
}

export default function ClanSettingsModal({ clan_id, close }: ClanSettingsModalProps) {
  const [settings, setSettings] = useSettings();
  return (
    <Layout level="4" style={{ borderRadius: 8, padding: 4 }}>
      <UpdateWrapper>
        {update => (
          <CheckBox
            style={{ margin: 8 }}
            checked={settings.clan_options[clan_id].shadow}
            onChange={checked => {
              settings.clan_options[clan_id].shadow = checked;
              update();
            }}>
            Show Shadow Members
          </CheckBox>
        )}
      </UpdateWrapper>
      <UpdateWrapper>
        {update => (
          <CheckBox
            style={{ margin: 8 }}
            checked={settings.clan_options[clan_id].subtract}
            onChange={checked => {
              settings.clan_options[clan_id].subtract = checked;
              update();
            }}>
            Subtract View
          </CheckBox>
        )}
      </UpdateWrapper>
      <UpdateWrapper>
        {update => (
          <CheckBox
            disabled={true}
            style={{ margin: 8 }}
            checked={settings.clan_options[clan_id].share}
            onChange={checked => {
              settings.clan_options[clan_id].share = checked;
              update();
            }}>
            User Share Requirements
          </CheckBox>
        )}
      </UpdateWrapper>
      <Button
        style={{ margin: 4, flex: 1 }}
        onPress={() => {
          close();
          setSettings({ ...settings });
        }}>
        Done
      </Button>
    </Layout>
  );
}
