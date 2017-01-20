/**
 * Create Simple ORM for Users and Events.
 */
const Sequelize = require('sequelize');
const uuidV4 = require('uuid/v4');

const sequelize = new Sequelize('postgres://mattkim@localhost:5432/kit-api?sslmode=disable');

const User = sequelize.define('user', {
    uuid: {
      type: Sequelize.UUID,
      primaryKey: true,
    },
    email: Sequelize.STRING,
    created_at: Sequelize.DATE,
    updated_at: Sequelize.DATE,
    deleted_at: Sequelize.DATE,
  }, {
    underscored: true,
    tableName: 'users',
  }
);

const Event = sequelize.define('event', {
    uuid: {
      type: Sequelize.UUID,
      primaryKey: true,
    },
    created_by_user_uuid: {
      type: Sequelize.UUID,
      references: {
        model: User,
        key: 'uuid',
        deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE,
      }
    },
    title: Sequelize.STRING,
    description: Sequelize.STRING,
    polls: Sequelize.JSON,
    created_at: Sequelize.DATE,
    updated_at: Sequelize.DATE,
    deleted_at: Sequelize.DATE,
  }, {
    underscored: true,
    tableName: 'events',
  }
);

const EventInvitee = sequelize.define('event_invitee', {
    event_uuid: {
      type: Sequelize.UUID,
      references: {
        model: Event,
        key: 'uuid',
        deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE,
      }
    },
    user_uuid: {
      type: Sequelize.UUID,
      references: {
        model: User,
        key: 'uuid',
        deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE,
      }
    },
    // These should exist.
    // created_at: Sequelize.DATE,
    // updated_at: Sequelize.DATE,
    // deleted_at: Sequelize.DATE,
  }, {
    // TODO: remove once we get timestamps added.
    timestamps: false,
    underscored: true,
    tableName: 'events_invitees',
  }
);

function createEvent(currEvent) {
  const userUuid = uuidV4();

  // TODO: create event might not work here in succession.
  console.log("**** currEvent");
  console.log(currEvent);

  User.create({
    uuid: userUuid,
    email: `janedoe-${userUuid}@test.com`,
    created_at: new Date(1980, 6, 20),
    updated_at: new Date(1980, 6, 20)
  });

  const event = {
    uuid: uuidV4(),
    created_by_user_uuid: userUuid,
    title: "test title",
    description: "test description",
    polls: currEvent.polls,
    created_at: new Date(1980, 6, 20),
    updated_at: new Date(1980, 6, 20)
  };

  Event.create(event);

  return event;
}

function getOneEvent(uuid, cb) {
  Event.findAll({
    where: {
      uuid: uuid,
    }
  }).then((event) => {
    // Only return the first one.
    cb(event[0]);
  });
}

module.exports = {
  createEvent: createEvent,
  getOneEvent: getOneEvent,
};
